import React from "react";

export const Card = ({ movie }) => {
  return (
    <div className="col mb-3">
      <div className="card h-100 mb-4 rounded-4">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          className="card-img-top rounded-top-4"
          alt={movie.Title}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{movie.Title}</h5>
        </div>
      </div>
    </div>
  );
};
