import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import Button from "react-bootstrap/Button";
const API = import.meta.env.VITE_API_URL

function ActorDetails() {
  const [actor, setActor] = useState([])
  let navigate = useNavigate()
  let { movie_id, id } = useParams()

  useEffect(() => {
    fetch(`${API}/movies/${movie_id}/actors/${id}`)
    .then(response => response.json())
    .then(actor => {
      setActor(actor[0])
    })
    .catch(() => navigate("/not-found"))
  }, [id, navigate])

  const handleDelete = () => {
    const httpOptions = {"method" : "DELETE"}
    fetch(`${API}/movies/${movie_id}/actors/${id}`, httpOptions)
      .then((res) => {
        alert("hey - actor was deleted!  Way to GO!");
        navigate(`/movies/${movie_id}/actors/`);
      })
      .catch((err) => console.error(err))
  }

  return (
    <article className="top">
      <table className="table table-striped table-dark">
        <tbody>
          <tr>
            <td> <img src={`${actor.actor_img}`} /> </td>
          </tr>
          <tr>
            <td>Name: {actor.actor_name}</td>
          </tr>
          <tr>
            <td>Age: {actor.age}  </td>
          </tr>
          
          <tr>
            <td>Active: {actor.active?"Yes":"No"}</td>
          </tr>
         
        </tbody>
      </table>
      <div className="showNavigation">
          <Link to={`/movies/${movie_id}/actors/`}>
            <Button  type="button" className="btn btn-primary" >Back</Button>
          </Link>
          <Link to={`/movies/${movie_id}/actors/`}>
            <Button  type="button" className="btn btn-primary"  onClick={handleDelete}>Delete</Button>
          </Link>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </article>
  )
}

export default ActorDetails