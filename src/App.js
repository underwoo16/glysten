import React, { Component } from 'react';
import './App.css';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    console.log(params);

    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }

    this.state = {
      loggedIn: token ? true : false,
      topArtists: []
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  getTopArtists(timeRange){
    var options = { time_range: timeRange }
    spotifyApi.getMyTopArtists(options)
      .then((response) => {
        console.log(response)
        this.setState({
          topArtists: response.items
        });
      })
  }

  render() {
    var {loggedIn, topArtists} = this.state;

    return (
      <div className='App'>
        { !loggedIn &&
          <a href='http://localhost:8888'> Login to Spotify </a>
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
    )
  }
}

export default App;
