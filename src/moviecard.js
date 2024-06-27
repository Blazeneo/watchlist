import React from "react";
import { useDispatch } from "react-redux";
import { addStars, revStars, watch ,deleteMovie} from "./redux/moviereducer"; 
function Moviecard(props) {
  const dispatch = useDispatch();

  const { title, plot, year,  stars, watched, poster } = props.data;

  return (
    <div className="main">
      <div className="movie-card">
        <div className="left">
          <img alt="poster" src={poster} />
        </div>
        <div className="right">
          <div className="title">{title}</div>
          <div className="plot">{plot}</div>
          <div className="price">{year}</div>
          <div className="footer">
            <div className="rating">{stars}</div>
            <div className="star-dis">
              <img
                alt="decrease"
                className="str-btn"
                onClick={() => dispatch(revStars(props.data))}
                src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
              />
              <img
                alt="stars"
                className="stars"
                src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
              />
              <img
                alt="plus"
                className="str-btn"
                onClick={() => dispatch(addStars(props.data))}
                src="https://cdn-icons-png.flaticon.com/128/32/32563.png"
              />
              
            </div>
            <button onClick={()=>dispatch(deleteMovie(props.data))}><img alt="del"  className="stars del" src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png"/></button>
            <button
              className={!watched ? "favourite-btn" : "unfavourite-btn"}
              onClick={() => dispatch(watch(props.data))}
            >
              {!watched ? "Watched" : "UnWatched"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moviecard;
