import { useDispatch } from "react-redux";
import api from "../api";
const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );

      const topRatedApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );

      const upCommingApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );

      const genreApi = api.get(
        `genre/movie/list?api_key=${API_KEY}&language=en-US`
      );

      let [popularMovies, topRatedMovies, upCommingMovies, genreList] =
        await Promise.all([
          popularMovieApi,
          topRatedApi,
          upCommingApi,
          genreApi,
        ]); // 여러개의 api를 동시에 받을때 promise.all로 하는게 속도 측면에서 좋다.
      dispatch({
        type: "GET_MOVIE_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upCommingMovies: upCommingMovies.data,
          loading: false,
          genreList: genreList.data.genres,
        },
      });
    } catch (error) {
      //에러 핸들링
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}
export const movieAction = { getMovies };
