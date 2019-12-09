import React from 'react';
import './ArtistView.css';
import '../../css/skeleton.css'

export class ArtistSquare extends React.Component<SpotifyApi.ArtistObjectFull> {

  openArtistLink() {
    let artist = this.props
    window.open(artist.external_urls.spotify, "_blank");
  }

  render() {
    let artist = this.props;

    return (
      <div className='artist-square one-third column' onClick={() => this.openArtistLink()}>
        <h3 className='content'> {artist.name} </h3>
        <figure className='u-max-full-width'>
          <img className='artist-image' src={artist.images[0].url} alt={artist.name}></img>
        </figure>
      </div>
    );
  }

} // end class ArtistView

export default ArtistSquare;
