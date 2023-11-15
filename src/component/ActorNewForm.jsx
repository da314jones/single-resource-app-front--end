
import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./ActorNewForm.css"
const API = import.meta.env.VITE_API_URL;

export default function ActorNewForm() {
    let { movie_id } = useParams();
    const [actor, setActor] = useState({
        actor_name: "",
        actor_img: "",
        age: 0,
        movie_id: movie_id,
        active: false
    });
    const navigate = useNavigate();

    const addActor = () => {
        fetch(`${API}/movies/${movie_id}/actors`, {
            method: "POST",
            body: JSON.stringify(actor),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(() => {
                navigate(`/movies/${movie_id}/actors`);
            })
            .catch((error) => console.error("catch", error));
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setActor({
            ...actor,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addActor();
    };

    const handleCancel = () => {
        navigate(`/movies/${movie_id}/actors`);
    };

    const handleReset = () => {
        setActor({
            actor_name: "",
            actor_img: "",
            age: 0,
            movie_id: movie_id,
            active: false
        });
    };

    return (
        <div className="actor-newForm-container">
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
                <div className="form-container-button">
                    <Button className="new" variant="primary" type="submit">
                      <span>New Actor</span>
                    </Button>
                    <Button className="clear" variant="outline-primary" onClick={handleReset} type="button">
                        <span>Clear</span>
                    </Button>
                    <Button className="cancel" variant="secondary" onClick={handleCancel} type="button">
                        <span>Cancel</span>
                    </Button>
                </div>
            </Form>
        </div>
    );
}