import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Movie from "./Movie";
import "./MovieList.css";

const API = import.meta.env.VITE_API_URL;

export default function MovieList() {
  const [allMovies, setAllMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(7);
  const [moviesOrder, setMoviesOrder] = useState(false);
  const navigate = useNavigate();

  const changeMovieOrder = () => {
    if (moviesOrder === false) {
      setMoviesOrder(true)
      const newOrder = allMovies.sort((a, b) => {
        if (a.movie_name.toLowerCase() < b.movie_name.toLowerCase())
          return -1
        else if (a.movie_name.toLowerCase() > b.movie_name.toLowerCase())
          return 1
        else
          return 0
      })
      setAllMovies(newOrder)
    }
    else {
      setMoviesOrder(false)
      const newOrder = allMovies.sort((b, a) => {
        if (a.movie_name.toLowerCase() < b.movie_name.toLowerCase())
          return -1
        else if (a.movie_name.toLowerCase() > b.movie_name.toLowerCase())
          return 1
        else
          return 0
      })
      setAllMovies(newOrder)
    }
  }

  const handleSortMovies = event => {
    event.preventDefault()
    changeMovieOrder()
  }

  useEffect(() => {
    fetch(`${API}/movies`)
      .then((response) => response.json())
      .then((movies) => {
        setAllMovies(movies);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = allMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="movies-container">
      <img className="movies-container-image" src="/camera.jpeg" alt="" />
      <section>
        <div className="balance" >
          Balance Across Movies On Page: {currentMovies.reduce((tot, curr) => { return tot + curr.current_balance }, 0)} million
        </div>
        <Table className="edit-table" striped bordered hover>
          <thead>
            <tr className="table-row">
              <th className="name">
                <Button className="atlBtnColor-sort btn-secondary btn-sm" onClick={handleSortMovies}>
                  Sort {` \u21f3`}
                </Button>
              </th>
              <th className="director">Director</th>
              <th className="balance">Balance</th>
              <th className="schedule">Schedule</th>
              <th className="image">Image</th>
            </tr>
          </thead>
          <tbody>
            {currentMovies.map((movie, index) => {
              const movieWithCorrectProps = {
                id: movie.id,
                movie_name: movie.movie_name,
                director: movie.director,
                currentBalance: movie.current_balance,
                schedule: movie.schedule,
                poster_link: movie.poster_link,
              };

              return (
                <Movie
                  key={movie.id}
                  movie={movieWithCorrectProps}
                  index={index + 1 + (currentPage - 1) * moviesPerPage}
                />
              );
            })}
          </tbody>
        </Table>
        <div className="movie-container-pagination">
          <Button
            className="atlBtnColor"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            variant="primary"
          >
            Previous
          </Button>
          <span>Page {currentPage}</span>
          <Button
            className="atlBtnColor"
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastMovie >= allMovies.length}
            variant="primary"
          >
            Next
          </Button>
        </div>
      </section>
    </div>
  );
}
