
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./MovieNewForm.css"
const API = import.meta.env.VITE_API_URL;

export default function MovieNewForm() {
  const [movie, setMovie] = useState({
    movie_name: "",
    poster_link: "",
    studio: "",
    director: "",
    staring: "",
    overview: "",
    runtime: 0,
    release_year: 0,
    budget: 0,
    current_balance: 0,
    schedule: "",
    genre: "",
    in_production: false
  });
  const navigate = useNavigate();

  const addMovie = () => {
    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/movies`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMovie({
      ...movie,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie();
  };

  const handleCancel = () => {
    navigate("/movies");
  };

  const handleReset = () => {
    setMovie({
      movie_name: "",
      poster_link: "",
      studio: "",
      director: "",
      staring: "",
      overview: "",
      runtime: 0,
      release_year: 0,
      budget: 0,
      current_balance: 0,
      schedule: "",
      genre: "",
      in_production: false
    });
  };

  return (
    <div>
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridMovieName">
            <Form.Label>Code name</Form.Label>
            <Form.Control
              required
              name="movie_name"
              type="text"
              placeholder="Enter code name"
              value={movie.movie_name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPosterLink">
            <Form.Label>Poster Link</Form.Label>
            <Form.Control
              name="poster_link"
              type="text"
              placeholder="Enter poster URL"
              value={movie.poster_link}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridStudio">
            <Form.Label>Studio</Form.Label>
            <Form.Control
              name="studio"
              type="text"
              placeholder="Enter production studio"
              value={movie.studio}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDirector">
            <Form.Label>Director</Form.Label>
            <Form.Control
              name="director"
              type="text"
              placeholder="Enter director name"
              value={movie.director}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridStaring">
            <Form.Label>Starring</Form.Label>
            <Form.Control
              name="staring"
              type="text"
              placeholder="Enter main star name"
              value={movie.staring}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridGenre">
            <Form.Label>Genre</Form.Label>
            <Form.Control
              name="genre"
              type="text"
              placeholder="Enter genre"
              value={movie.genre}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridRuntime">
            <Form.Label>Runtime (minutes)</Form.Label>
            <Form.Control
              name="runtime"
              type="number"
              placeholder="Enter runtime in minutes"
              value={movie.runtime}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridReleaseYear">
            <Form.Label>Release Year</Form.Label>
            <Form.Control
              name="release_year"
              type="number"
              placeholder="Enter release year"
              value={movie.release_year}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridBudget">
            <Form.Label>Budget ($)</Form.Label>
            <Form.Control
              name="budget"
              type="number"
              placeholder="Enter budget"
              value={movie.budget}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCurrentBalance">
            <Form.Label>Current Balance ($)</Form.Label>
            <Form.Control
              name="current_balance"
              type="number"
              placeholder="Enter current balance"
              value={movie.current_balance}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridSchedule">
            <Form.Label>Schedule:</Form.Label>
            <Form.Control
              name="schedule"
              type="text"
              placeholder="Schedule"
              value={movie.schedule}
              onChange={handleInputChange}
            />
          </Form.Group>
          
        </Row>
        <Form.Group className="mb-3" controlId="formGridOverview">
          <Form.Label>Overview</Form.Label>
          <Form.Control
            as="textarea"
            name="overview"
            placeholder="Enter overview description"
            value={movie.overview}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formInProduction">
          <Form.Check
            type="checkbox"
            label="In Production"
            name="in_production"
            onChange={handleInputChange}
            checked={movie.in_production}
          />
        </Form.Group>
        <div className="form-container-button">
        <Button className="new" variant="primary" type="submit">
          <span>New Movie</span>
        </Button>
        <Button className="clear" variant="outline-primary" onClick={handleReset} type="button">
          <span>Clear</span>
        </Button>
        <Button className="cancel"  variant="secondary" onClick={handleCancel} type="button">
          <span>Cancel</span>
        </Button>
      </div>
      </Form>
    </div>
  );
}