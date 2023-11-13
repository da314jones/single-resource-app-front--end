
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./ActorEditForm.css"
const API = import.meta.env.VITE_API_URL;

export default function ActorEditForm() {
    let { movie_id, id } = useParams();
    const [actor, setActor] = useState({
        actor_name: "",
        actor_img: "",
        age: 0,
        movie_id: movie_id,
        active: false
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setActor({
            ...actor,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const updateActor = () => {
        fetch(`${API}/movies/${movie_id}/actors/${id}`, {
            method: "PUT",
            body: JSON.stringify(actor),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    navigate(`/movies/${movie_id}/actors`);
                } else {
                    throw new Error("Network response was not ok.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    useEffect(() => {
        fetch(`${API}/movies/${movie_id}/actors/${id}`)
            .then((response) => response.json())
            .then((responseJSON) => {
                setActor(responseJSON[0]);
            })
            .catch((error) => console.error("Error:", error));
    }, [movie_id, id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateActor();
    };

    const handleBack = () => {
        navigate(`/movies/${movie_id}/actors`)
    }

    return (
        <div>
            <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridActorName">
                        <Form.Label>Actor Name</Form.Label>
                        <Form.Control
                            required
                            name="actor_name"
                            type="text"
                            placeholder="Enter actor name"
                            value={actor.actor_name}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridActorImg">
                        <Form.Label>Actor Image</Form.Label>
                        <Form.Control
                            name="actor_img"
                            type="text"
                            placeholder="Enter Actor Image URL"
                            value={actor.actor_img}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            name="age"
                            type="number"
                            placeholder="Enter actor age"
                            value={actor.age}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridActive">
                    <Form.Check
                        type="checkbox"
                        label="Active"
                        name="active"
                        onChange={handleInputChange}
                        checked={actor.active}
                    />
                </Form.Group>
                <div className="form-edit-container-button">
                    <div>
                        <Button className="update atlBtnColor" variant="primary" type="submit">
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