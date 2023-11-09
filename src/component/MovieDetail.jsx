import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link, useParams, useNavigate } from 'react-router-dom';
const API = import.meta.env.VITE_API_URL;

export default function MovieDetail() {
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
}, {is, API})

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
    <div>
      
    </div>
  )
}
