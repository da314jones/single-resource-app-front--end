import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./MovieEditForm.css";

const API = import.meta.env.VITE_BASE_URL;

export default function MovieEditForm() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    poster_link: "",
    director: "",
    starring: "",
    overview: "",
    runtime: 0,
    release_year: 0,
    budget: 0,
    current_balance: 0,
    schedule: "",
    in_production: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMovie({
      ...movie,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const updateMovie = () => {
    fetch(`${API}/movies/${id}`, {
      method: "PUT",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          navigate(`/movies/${id}`);
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setMovie(responseJSON);
      })
      .catch((error) => console.error("Error:", error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMovie();
  };

  const handleBack = () => {
    navigate(`/movies/${id}`)
  }

  return (
    <div className="form-edit-container">
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="poster_link">
            <Form.Label>Poster Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter poster URL"
              name="poster_link"
              value={movie.poster_link}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="director">
            <Form.Label>Director</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter director's name"
              name="director"
              value={movie.director}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="starring">
            <Form.Label>Starring</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter main cast"
              name="starring"
              value={movie.starring}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="runtime">
            <Form.Label>Runtime (minutes)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter runtime in minutes"
              name="runtime"
              value={movie.runtime}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="release_year">
            <Form.Label>Release Year</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter release year"
              name="release_year"
              value={movie.release_year}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="budget">
            <Form.Label>Budget ($)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter budget"
              name="budget"
              value={movie.budget}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="current_balance">
            <Form.Label>Current Balance ($)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter current balance"
              name="current_balance"
              value={movie.current_balance}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="overview">
            <Form.Label>Overview</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter movie overview"
              name="overview"
              value={movie.overview}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="schedule">
            <Form.Label>Schedule</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter schedule details"
              name="schedule"
              value={movie.schedule}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="in_production">
          <Form.Check
            type="checkbox"
            label="In Production"
            name="in_production"
            checked={movie.in_production}
            onChange={handleInputChange}
          />
        </Form.Group>
        <div className="form-edit-container-button">
          <div>
          <Button className="update" variant="primary" type="submit">
            Update Movie
          </Button>
          </div>
          <div>
          <Button variant="secondary" onClick={handleBack} type="submit">
            Back
          </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}
