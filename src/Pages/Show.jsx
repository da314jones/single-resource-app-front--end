
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const API = import.meta.env.VITE_API_URL;
import MovieDetails from "../component/MovieDetails";
import "./Show.css";

export default function Show() {
  let { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    fetch(`${API}/movies/${id}`)
    .then((response) => response.json())
    .then((responseJSON) => {
      setMovie(responseJSON)
    })
    .catch(error => console.log(error))
  }, [id, API])

  if (!movie) {
    return <div>Loading...</div>
  }
  
  return (
    <div className="Show">
      <div className="showtitle">
        {movie.movie_name}
      </div>
      <MovieDetails movie={movie} />
    </div>
  );
}


