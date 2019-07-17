import React from 'react';
import './ArtistView.css';
import '../../css/skeleton.css'

export class ArtistSquare extends React.Component<SpotifyApi.ArtistObjectFull> {
  render() {
    let artist = this.props;

    return (
      <div className='artist-square one-third column'>
        <h3 className='content'> {artist.name} </h3>
        <figure className='artist-image u-max-full-width'>
          <img src={artist.images[0].url} alt={artist.name}></img>
        </figure>
      </div>
    );
  }

} // end class ArtistView

export default ArtistSquare;
