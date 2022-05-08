let inittialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcommingMovies: {},
  loading: "",
  genreList: [],
};
function movieReducer(state = inittialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIE_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upcommingMovies: payload.upCommingMovies,
        loading: payload.loading,
        genreList: payload.genreList,
      };
    case "GET_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
      };
    default:
      return { ...state };
  }
}
export default movieReducer;
