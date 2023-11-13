import { Link, useNavigate } from "react-router-dom";
import "./MovieDetails.css";
import Table from "react-bootstrap/Table";
import Task from "./Task"
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
      <div className="sidebar">
        {/* <div className="btnGrid"> */}
          <div className="aside-container-top-btn">
          <button className="delete btn btn-primary atlBtnColor" onClick={handleDelete}>Delete</button>
          
            <button className="back btn btn-primary atlBtnColor" onClick={() => navigate(-1)}>Back</button>
          </div>
        {/* </div> */}
        <div className="imageV2" >
          <img
            src={movie.poster_link}
            alt={`Poster of ${movie.movie_name}`}
            style={{ height: "375px" }}
          />
        </div>
        <br></br>
        <Link className="atlBtnColor" to={`/movies/${movie.id}/edit`}>Edit</Link>
        <Link className="atlBtnColor" to={`/movies/${movie.id}/actors`}>Contracted Actors</Link>
        <Link className="atlBtnColor" to={`/tasks/${movie.id}`}>New Task</Link>
      </div>
      <div className="movie-details table table-striped table-hover">
        <table >
          <tbody >
            <tr>
              <th>Studio</th>
              <td>{movie.studio}</td>
            </tr>
            <tr>
              <th>Overview</th>
              <td>{movie.overview}</td>
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
          </tbody>
        </table>
  
        <Table className="splitTable" striped bordered hover>
          <tbody> 
            <tr>
              <th>
                Todo(s):
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr> 
            <tr>
              <th>
                Production Task Name
              </th>
              <th>
                Description
              </th>
              <th>
                Department
              </th>
              <th>
                Cost
              </th>
              <th>
                Completed
              </th>
            </tr>
          </tbody>
          
          <tbody>
            {movie.allTasks.map((task, index) => {
              return(<Task task_name={task.task_name}
                           description={task.description}
                           department={task.department}
                           cost={task.cost}
                           completed={task.completed}
                           key={task.id} />)
            })}
          </tbody>
        </Table>

      </div>
    </div>
  );
}
