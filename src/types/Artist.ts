export type Artist = {
  external_urls : object,
  followers : object,
  genres : Array<string>,
  href : string,
  id : string
  images : Array<object>,
  name : string,
  popularity : number,
  type : string,
  uri : string
};

export interface ArtistProps {
  artists: Artist[]
};
