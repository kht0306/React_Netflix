import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` +
          ")",
      }}
    >
      <div className="overlay">
        <h4>{item.title}</h4>
        <div>
          {item.genre_ids.map((id, index) => (
            <Badge key={index} bg="danger">
              {genreList.find((item) => item.id === id).name}
              {/* find 함수는 찾은 값을 그대로 반환 해줌...*/}
            </Badge>
          ))}
        </div>
        <div>
          <span>평점: {item.vote_average}</span>
          <br />
          <span>{item.adult ? "청불" : "Under 18"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
