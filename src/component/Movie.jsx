// Movie.js
import { Link } from "react-router-dom";
import React from "react";
import "./Movie.css"

export default function Movie({ movie }) {
 
  return (
    <tr>
      <td>
        <Link to={`/movies/${movie.id}`}>{movie.movie_name}</Link>
      </td>
      <td>{movie.director}</td>
      <td>{movie.currentBalance}</td>
      <td>{movie.schedule}</td>

      <td>
        <a href={movie.poster_link} target="_blank" rel="noopener noreferrer">
          <img
            src={movie.poster_link}
            alt={`Poster of ${movie.movie_name}`}
            style={{ height: "50px" }}
          />
        </a>
      </td>
    </tr>
  );
}
