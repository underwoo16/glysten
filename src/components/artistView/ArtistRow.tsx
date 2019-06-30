import React from 'react';
import './ArtistView.css';
import '../../css/skeleton.css'
import { ArtistProps } from '../../types/Artist';
import { ArtistSquare } from './ArtistSquare';

export class ArtistRow extends React.Component<ArtistProps> {
  render() {
    let artists = this.props.artists.slice(0);

    return (
      <div className='row artist-row'>
        { artists.map(artist => <ArtistSquare {...artist} ></ArtistSquare> )}
      </div>
    );
  }

} // end class ArtistView

export default ArtistRow;
