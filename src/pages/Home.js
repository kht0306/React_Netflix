import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { movieAction } from "../redux/actions/movieAction";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcommingMovies, loading, genreList } =
    useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, [dispatch]);
  //loading이 true이면 스피너를 보여주고, false이면 데이터를 보여주고
  //true는 데이터 도착 전
  //false 데이터 도착 후(혹은 에러가 났을 때)
  if (loading) {
    return <ClipLoader color="#ffff" loading={loading} size={150} />;
  }
  return (
    <div>
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
      {/* popularMovies.result의 값이 있을 때 보여주라는 뜻 - 생명주기상 태그 먼저 그려지고 useEffect가 실행되기 때문에 최초에는 popularMovies.result값을 호출 할 수 없음 */}
      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies} />
      <h1>Top Rated Movie</h1>
      <MovieSlide movies={topRatedMovies} />
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upcommingMovies} />
    </div>
  );
};

export default Home;
