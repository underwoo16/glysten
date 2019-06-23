import React from 'react';
import './ArtistView.css';
import '../../css/skeleton.css'
import { Artist } from '../../types/Artist';

export class ArtistView extends React.Component<Artist, {}> {
  render() {
    return ( <div className="square one-third column"> { this.props.name } </div> );
  }

} // end class ArtistView

export default ArtistView;
