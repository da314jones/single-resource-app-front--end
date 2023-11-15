
import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./ActorNewForm.css"
import "./TaskNewForm.css"
const API = import.meta.env.VITE_API_URL;

export default function TaskNewForm() {
    let { movie_id } = useParams();
    const [task, setTask] = useState({
        task_name: "",
        description: "",
        department: "",
        cost: 0,
        movie_id: movie_id,
        completed: false
    });
    const navigate = useNavigate();

    const addTask = () => {
        fetch(`${API}/movies/${movie_id}/tasks`, {
            method: "POST",
            body: JSON.stringify(task),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(() => {
                navigate(`/movies/${movie_id}/tasks`);
            })
            .catch((error) => console.error("catch", error));
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setTask({
            ...task,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask();
    };

    const handleBack = () => {
        navigate(`/movies/${movie_id}`);
    };

    const handleReset = () => {
        setTask({
            task_name: "",
            description: "",
            department: "",
            cost: 0,
            movie_id: movie_id,
            completed: false
        });
    };

    return (
        <div>
            <Form className="task-form-new" noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridTaskName">
                        <Form.Label>Task Name</Form.Label>
                        <Form.Control
                            required
                            name="task_name"
                            type="text"
                            placeholder="Enter task name"
                            value={task.task_name}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            name="description"
                            type="textarea"
                            placeholder="Enter Description of Task"
                            value={task.description}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridDepartment">
                        <Form.Label>Department</Form.Label>
                        <Form.Control
                            name="department"
                            type="text"
                            placeholder="Enter Department to Handle Task"
                            value={task.department}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCompleted">
                        <Form.Check
                            name="completed"
                            label="Completed"
                            type="checkBox"
                            placeholder="Enter Department to Handle Task"
                            checked={task.completed}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridCost">
                    <Form.Label>Cost</Form.Label>
                    <Form.Control
                        type="number"
                        label="Cost"
                        name="cost"
                        placeholder="Cost"
                        onChange={handleInputChange}
                        value={task.cost}
                    />
                </Form.Group>
                <div className="form-container-button">
                    <Button className="new" variant="primary" type="submit">
                       <span>New Task</span>
                    </Button>
                    <Button className="clear" variant="outline-primary" onClick={handleReset} type="button">
                        <span>Clear</span>
                    </Button>
                    <Button className="cancel" variant="secondary" onClick={handleBack} type="button">
                       <span>Back</span>
                    </Button>
                </div>
            </Form>
        </div>
    );
}