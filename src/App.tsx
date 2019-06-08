import React from 'react';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi()

interface IState {
      loggedIn: boolean,
      topArtists: Array<Artist>
}

interface IProps {}

type Artist = {
  external_urls : object,
  followers : object,
  genres : Array<string>,
  href : string,
  id : string
  images : Array<object>,
  name : string,
  popularity : number,
  type : string,
  uri : string
};

export class App extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    const token = this.getAccessToken();
    console.log(token);

    if (token) {
      spotifyApi.setAccessToken(token);
    }

    this.state = {
      loggedIn: token ? true : false,
      topArtists: []
    };
  }

  getAccessToken():string {
    let hashParams = new Map();

    let regEx = /([^&;=]+)=?([^&;]*)/g
    let hash = window.location.hash.substring(1);

    let e = regEx.exec(hash);
    while (e) {
       let key = e[1]
       let value = decodeURIComponent(e[2]);
       hashParams.set(key, value)

       e = regEx.exec(hash);
    }
    return hashParams.get("access_token");
  }

  getTopArtists(timeRange: string){
    let options = { time_range: timeRange }
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
        <div>
          {topArtists.map(artist =>
              <div> {artist.name } </div>
          )}
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
