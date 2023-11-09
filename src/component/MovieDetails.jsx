import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
const API = import.meta.env.VITE_API_URL;

export default function MovieDetails() {
    const [movie, setMovie] = useState([]);
        const { id } = useParams();
        const navigate = useNavigate();

useEffect(() => {
    fetch(`${API}/movies/${id}`)
    .then ((response) => response.json())
    .then((responseJSON) => {
        setMovie(responseJSON)
    })
    .catch(error => console.log(error))
}, {id, API})

const handleDelete = () => {
    deleteMovie()
}

const deleteMovie = () => {
    const httpOptions = { method: "DELETE" }
    fetch(`${API}/movies/${id}`, httpOptions)
    .then(() => navigate(`/movies`))
    .catch(error => console.log(error))
}

  return (
    <div className="movie-detail-container">
      <div className="sidebar">
        <button onClick={handleDelete}>Delete</button>
        <Link to={`/edit/${movie.id}`}>Edit</Link>
        <button onClick={() => navigate(-1)}>Back</button>
        <Link to={`/tasks/${movie.id}`}>New Task</Link>
      </div>
      <div className='movie-details'>
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
          <th>Director</th>
          <td>{movie.director}</td>
        </tr>
        <tr>
          <th>Staring</th>
          <td>{movie.staring}</td>
        </tr>
        <tr>
          <th>Genre</th>
          <td>{movie.genre}</td>
        </tr>
        <tr>
          <th>Schedule</th>
          <td>{movie.schedule}</td>
        </tr>
        <tr>
          <th>Release Year</th>
          <td>{movie.releaseYear}</td>
        </tr>
        <tr>
          <th>Tasks</th>
          <td></td>
        </tr>
        <tr>
          <th>description</th>
          <td>{movie.description}</td>
        </tr>
        <tr>
          <th>Department</th>
          <td>{movie.department}</td>
        </tr>
        <tr>
          <th>Cost</th>
          <td>{movie.cost}</td>
        </tr>
        <tr>
          <th>Edit</th>
          <td>
            <Link to={`/movies/${movie.id}`}></Link>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
  )
}
