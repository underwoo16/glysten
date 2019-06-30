import React from 'react';
import './ArtistView.css';
import '../../css/skeleton.css'
import { ArtistProps } from '../../types/Artist';

export class ArtistRow extends React.Component<ArtistProps> {
  render() {
    let artists = this.props.artists.slice(0);

    return (
      <div className='row artist-row'>
        { artists.map(artist => <div className='artist-square one-third column'> {artist.name} </div> )}
      </div>
    );
  }

} // end class ArtistView

export default ArtistRow;
