import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";

//홈페이지
//1. 3개 페이지 필요 홈, 무비, 무비 디테일 페이지
//2. 홈페이지 에서 배너를 볼수 있다.
//3. 3가지 종류 섹션의 영화를 볼수 있다. (popular, top rated, upcomming)
//4. 각 영화에 마우스 올릴 때 제목, 장르, 점수, 인기도, 청불여부 등을 알 수있다.
//5. 영화를 슬라이드로 넘기면서 볼 수 있다.

//무비 디테일
//6.영화 디테일 페이지에서 영화에 대한 디테일한 정보를 볼 수 있다.(포스터, 제목, 줄거리, 점수, 인기도 등등)
//7.트레일러를 누르면 예고편을 볼 수 있다.
//8.리뷰도 볼 수 있다.
//9.관련된 영화도 볼 수 있다.

//10.영화 검색을 할 수 있다.
//11.영화 검색 결과를 정렬할 수 있다.
//12.영화 검색결과를 필터할 수 있다.
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id" element={<MovieDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
