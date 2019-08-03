import React from 'react';
import './ArtistView.css';
import '../../css/skeleton.css'
import { ArtistViewProps } from '../../types/ArtistProps';
import { ArtistRow } from './ArtistRow';

export class ArtistView extends React.Component<ArtistViewProps> {

  constructor(props: Readonly<ArtistViewProps>) {
    super(props);

    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleTimeChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.props.onTimeChange(event.target.value);
  }

  render() {
    let rows: SpotifyApi.ArtistObjectFull[][] = [];
    let allArtists = this.props.artists.slice(0);
    let timeRange = this.props.time_range;

    while(allArtists.length > 0) {
      rows.push(allArtists.splice(0, 3));
    }

    return (
      <div className='container'>
        <div className="container settings-header">

          <label className="settings-label" htmlFor="time_range"> Time Range </label>
          <select id="time_range" className="settings-select" value={timeRange} onChange={this.handleTimeChange} >
            <option value="short_term">1 Month</option>
            <option value="medium_term">6 Months</option>
            <option value="long_term">1+ Years</option>
          </select>
        </div>
        { rows.map(row => <ArtistRow  artists={row}> </ArtistRow> )}
      </div>
    );
  }

} // end class ArtistView

export default ArtistView;
