import { Link } from 'react-router-dom'

import React from 'react'

export default function Movie({ movie }) {
    
  return (
    <table>
      <tbody>
        <tr>
          <th>Studio</th>
          <td>{movie.studio}</td>
        </tr>
        <tr>
          <th>Overview</th>
          <td>{movie.overview}</td>
        </tr>
        <tr>
          <th>Balance</th>
          <td>{movie.balance}</td>
        </tr>
        <tr>
          <th>Budget</th>
          <td>{movie.budget}</td>
        </tr>
        <tr>
          <th>Budget</th>
          <td>{movie.director}</td>
        </tr>
        <tr>
          <th>Budget</th>
          <td>{movie.staring}</td>
        </tr>
        <tr>
          <th>Budget</th>
          <td>{movie.genre}</td>
        </tr>
        <tr>
          <th>Budget</th>
          <td>{movie.schedule}</td>
        </tr>
        <tr>
          <th>Budget</th>
          <td>{movie.releaseYear}</td>
        </tr>
        <tr>
          <th>Tasks</th>
          <td></td>
        </tr>
        <tr>
          <th>Budget</th>
          <td>{movie.description}</td>
        </tr>
        <tr>
          <th>Budget</th>
          <td>{movie.department}</td>
        </tr>
        <tr>
          <th>Budget</th>
          <td>{movie.cost}</td>
        </tr>
        
        <tr>
          <th>Favorites</th>
          <td>
            {movie.is_favorite ? (
              <span>⭐️</span>
            ) : (
              <span>&nbsp;&nbsp;&nbsp;</span>
            )}
          </td>
        </tr>
        <tr>
          <th>Title</th>
          <td style={{ cursor: "alias" }}>
            <a href={movie.url} target="_blank" rel="noreferrer">
              {movie.name}
            </a>
          </td>
        </tr>
        <tr>
          <th>Edit</th>
          <td>
            <Link to={`/movies/${movie.id}`}>✏️</Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

