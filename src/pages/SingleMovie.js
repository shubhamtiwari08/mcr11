import React, { useContext } from "react";
import { movieContext } from "../context/dataProvider";
import { useParams } from "react-router";

function SingleMovie() {
  const { movie,handleStar,handleUnstar,handleUnWishlist,handleWishlist   } = useContext(movieContext);

  const { singleMovieId } = useParams();

  const singleMovie = movie.movieList.filter(
    (item) => item.id == singleMovieId
  );

  const {
    id,
    title,
    year,
    genre,
    rating,
    director,
    writer,
    cast,
    summary,
    imageURL,
  } = singleMovie[0];
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={imageURL} alt={title} style={{ width: "30rem" }} />
        </div>
        <div className="col">
          <h2>{title}</h2>
          <p>summary:{summary}</p>
          <p>year:{year}</p>
          <p>
            genre:
            {genre.map((name) => (
              <span>{name}</span>
            ))}
          </p>
          <p>director:{director}</p>
          <p>writer:{writer}</p>
          <p>
            cast:
            {cast.map((name) => (
              <span>{name}</span>
            ))}
          </p>
          <div className="row">
            {singleMovie[0]?.starred === true ? (
              <div className="col">
                <button
                  className="btn btn-primary"
                  onClick={() => handleUnstar(id)}
                >
                  Unstar
                </button>
              </div>
            ) : (
              <div className="col">
                <button
                  className="btn btn-secondary"
                  onClick={() => handleStar(id)}
                >
                  star
                </button>
              </div>
            )}
            <div className="col">
            {singleMovie[0]?.wishlist === true ? (
              <div className="col">
                <button
                  className="btn btn-primary"
                  onClick={() => handleUnWishlist(id)}
                >
                  remove from wishlist
                </button>
              </div>
            ) : (
              <div className="col">
                <button
                  className="btn btn-secondary"
                  onClick={() => handleWishlist(id)}
                >
                  add to wishlist
                </button>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleMovie;
