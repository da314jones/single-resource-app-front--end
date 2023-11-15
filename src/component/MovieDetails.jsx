import { Link, useNavigate } from "react-router-dom";
import "./MovieDetails.css";
import { Button } from "react-bootstrap";
const API = import.meta.env.VITE_API_URL;

export default function MovieDetails({ movie }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    const httpOptions = { method: "DELETE" };
    fetch(`${API}/movies/${movie.id}`, httpOptions)
      .then(() => navigate("/movies"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="movie-detail-container">
               <div className="movie-container-sidebar">
          <img 
          className="movie-container-image"
            src={movie.poster_link}
            alt={`Poster of ${movie.movie_name}`}
          />
          <div className="movie-detail-container-links">
        <Link className="movie-detail-container-back" to={`/movies/`}>Back</Link>
                    <Link className="movie-detail-container-edit" to={`/movies/${movie.id}/edit`}>Edit</Link>
        <Link className="movie-detail-container-actors" to={`/movies/${movie.id}/actors`}>Actors</Link>
        <Link className="movie-detail-container-tasks" to={`/movies/${movie.id}/tasks`}>Tasks</Link>
        <Link className="movie-detail-container-addTask" to={`/movies/${movie.id}/tasks/new`}>Add Task</Link>
          <Link className="movie-detail-container-delete" onClick={handleDelete}>Delete
          </Link>
          </div>
        </div>
        
      
      <div className="movie-detail-container-table table table-striped table-hover">
        <table className="table1" >
          <tbody >
            <tr>
              <th>Studio</th>
              <td>{movie.studio}</td>
            </tr>
            <tr>
              <th>Overview</th>
              <td className="overview-text">{movie.overview}</td>
            </tr>
            <tr>
              <th>Balance(M$)</th>
              <td>{movie.current_balance ? movie.current_balance : 0}</td>
            </tr>
            <tr>
              <th>Budget(M$)</th>
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
              <td>{movie.release_year}</td>
            </tr>
            <tr>
              <th>In Production</th>
              <td>{movie.in_production ? "Yes" : "No"}</td>
            </tr>
            <tr>
              <th>Runtime</th>
              <td>{movie.runtime}</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}
