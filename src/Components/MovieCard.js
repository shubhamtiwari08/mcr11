import React, { useContext } from "react";
import { movieContext } from "../context/dataProvider";
import { useNavigate } from "react-router";

function MovieCard({ data }) {
  const { movie, handleStar, movieDispatch } = useContext(movieContext);

  const navigate = useNavigate();

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={data.imageURL} className="card-img-top" />
      <div
        className="card-body"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/${data.id}`)}
      >
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.summary}</p>
        
    </div>
    <div className="card-footer row">
          {data?.starred === true ? (
            <div className="col">
              <button
                className="btn btn-primary"
                onClick={() => handleStar(data.id)}
              >
                Unstar
              </button>
            </div>
          ) : (
            <div className="col">
              <button
                className="btn btn-secondary"
                onClick={() => handleStar(data.id)}
              >
                star
              </button>
            </div>
          )}
          <div className="col">
            <button className="btn btn-secondary">wishlist</button>
          </div>
        </div>
      </div>
  );
}

export default MovieCard;
