import React from 'react';
import './App.css';
import '../../css/skeleton.css'
import SpotifyWebApi from 'spotify-web-api-js';
import { ArtistView } from '../artistView/ArtistView';
import { getAccessToken } from '../../helpers/hashParams'

const spotifyApi = new SpotifyWebApi()

interface IState {
      loggedIn: boolean,
      topArtists: SpotifyApi.ArtistObjectFull[]
}

export class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props)
    const token = getAccessToken();
    console.log(token);

    if (token) {
      spotifyApi.setAccessToken(token);
    }

    this.state = {
      loggedIn: token ? true : false,
      topArtists: []
    };
  }

  getTopArtists(timeRange: string){
    let options = { time_range: timeRange, limit: 12 }
    spotifyApi.getMyTopArtists(options)
      .then((response) => {
        this.setState({
          topArtists: response.items
        });
      })
  }

  render() {
    let loggedIn = this.state.loggedIn;
    let topArtists = this.state.topArtists;
    let dataFetched = (topArtists.length !== 0);

    // fetch initial data
    // once login page and views are separate, do this fetch in componentDidMount
    if (loggedIn && !dataFetched) {
      this.getTopArtists("medium_term");
    }

    return (
      <div id="app" className='App'>
        { !loggedIn &&
          <a href='http://localhost:8888/login'> Login to Spotify </a>
        }
        { dataFetched &&
          <div>
            { <ArtistView artists={topArtists} > </ArtistView> }
          </div>
        }
        { loggedIn && !dataFetched &&
          <button onClick={() => this.getTopArtists("medium_term")}>
            Show Top Artists
          </button>
        }
      </div>
    );
  }

} // end class App

export default App;
