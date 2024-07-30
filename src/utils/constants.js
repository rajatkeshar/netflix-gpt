export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const BG_IMAGE = "https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png";
export const DEFAULT_PHOTOURL = "https://avatars.githubusercontent.com/u/13918193?v=4";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDE1YWVlZmMyMzkzNGU0MWZjMWM1M2M3MmI1MWRmOSIsIm5iZiI6MTcyMTg5MDk2MC44NjA3NjYsInN1YiI6IjY2YTFmN2M0YzAwYzE3NTc5YzAyNDE3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3sShth7c0gCaX9r074A6AQgqCRv-ReTvfg4F42tdMTo'
    }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const MOVIES_TYPE = ["now_playing", "popular", "top_rated", "upcoming"];
export const MOVIES_TYPE_MAPPING = {
  "now_playing": { title: "Now Playing", reducer: "nowPlayingMovies" },
  "popular": { title: "Popular Movies", reducer: "popularMovies" },
  "top_rated": { title: "Top Rated Movies", reducer: "topRatedMovies" },
  "upcoming": { title: "Upcoming Movies", reducer: "upcomingMovies" }
}