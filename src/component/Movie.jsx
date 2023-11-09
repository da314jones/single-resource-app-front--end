import { Link } from "react-router-dom";

import React from "react";

export default function Movie({ movie }) {
  return (
    <tr>
      <td>
        <Link to={`/movies/${movie.id}`}>
          <td>{movie.movie_name}</td>
        </Link>
      </td>
      <td>{movie.director}</td>
      <td>{movie.currentBalance}</td>
      <td>{movie.schedule}</td>
      <td>{movie.link}</td>
      <td>
        <a href={movie.poster_link} target="_blank" rel="noopener noreferrer">
          <img
            src={movie.poster_link}
            alt={`Poster of ${movie.movie_name}`}
            style={{ width: "100px" }}
          />
        </a>
      </td>
    </tr>
  );
}
