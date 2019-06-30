import React from 'react';
import './ArtistView.css';
import '../../css/skeleton.css'
import { Artist } from '../../types/Artist';

export class ArtistSquare extends React.Component<Artist> {
  render() {
    let artist = this.props;

    return (
      <div className='artist-square one-third column'>
        <div className='content'> {artist.name} </div>
      </div>
    );
  }

} // end class ArtistView

export default ArtistSquare;
