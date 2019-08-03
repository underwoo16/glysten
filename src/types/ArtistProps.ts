export interface ArtistProps {
  artists: SpotifyApi.ArtistObjectFull[]
};

export interface ArtistViewProps {
  artists: SpotifyApi.ArtistObjectFull[]
  time_range: string
  onTimeChange: Function
}
