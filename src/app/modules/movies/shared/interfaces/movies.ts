export interface Movies {
  backdrop_path: string;
  original_title: string;
  overview: string;
  release_date: Date;
  vote_average: number
  id: number;
}


export interface Movie {
  id?: number;
  homepage?: string;
  title?: string;
  tagline?: string;
  production_companies?: production_companies[];
  production_countries?: production_countries[];
}

export interface production_companies {
  id?: string;
  logo_path?: string;
  name?: string;
  origin_country?: string;
}

export interface production_countries {
  iso_3166_1?: string;
  name?: string;
}
