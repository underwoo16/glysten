import React from 'react';
import './ArtistView.css';
import '../../css/skeleton.css'
import { ArtistProps } from '../../types/ArtistProps';
import { ArtistRow } from './ArtistRow';

export class ArtistView extends React.Component<ArtistProps> {
  render() {
    let rows: SpotifyApi.ArtistObjectFull[][] = [];
    let allArtists = this.props.artists.slice(0);
    while(allArtists.length > 0) {
      rows.push(allArtists.splice(0, 3));
    }

    return (
      <div className='container'>
        { rows.map(row => <ArtistRow  artists={row}> </ArtistRow> )}
      </div>
    );
  }

} // end class ArtistView

export default ArtistView;
