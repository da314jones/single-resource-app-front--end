import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Movie from "./Movie";
import "./MovieList.css";

const API = import.meta.env.VITE_API_URL;

export default function MovieList() {
  const [allMovies, setAllMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(5);

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
      <img className="movies-container-image" src="public/lens-front.jpg" alt="" />
      <section>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Director</th>
              <th>Balance</th>
              <th>Schedule</th>
              <th>Image</th>
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
        <div className="pagination">
          <Button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            variant="primary"
          >
            Previous
          </Button>
          <span>Page {currentPage}</span>
          <Button
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
