import React from 'react';
import './App.css';
import '../../css/skeleton.css'
import SpotifyWebApi from 'spotify-web-api-js';
import { ArtistView } from '../artistView/ArtistView';
import { Artist } from '../../types/Artist';
import { getAccessToken } from '../../helpers/hashParams'

const spotifyApi = new SpotifyWebApi()

interface IState {
      loggedIn: boolean,
      topArtists: Array<Artist>
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
    let options = { time_range: timeRange, limit: 24 }
    spotifyApi.getMyTopArtists(options)
      .then((response) => {
        console.log(response)
        this.setState({
          topArtists: response.items
        });
      })
  }

  render() {
    let loggedIn = this.state.loggedIn;
    let topArtists = this.state.topArtists;

    return (
      <div className='App'>
        { !loggedIn &&
          <a href='http://localhost:8888/login'> Login to Spotify </a>
        }
        <div className='container'>
          <div className='row' >
            { topArtists.map(artist => <ArtistView {...artist} > </ArtistView> )}
          </div>
        </div>
        { loggedIn &&
          <button onClick={() => this.getTopArtists("medium_term")}>
            Show Top Artists
          </button>
        }
      </div>
    );
  }

} // end class App

export default App;
