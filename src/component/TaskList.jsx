import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import "./MovieDetails.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Task from "./Task"
import "./TaskList.css"
const API = import.meta.env.VITE_API_URL;

export default function TaskList() {
    const navigate = useNavigate();
    const { movie_id } = useParams()
    const [taskList, setTaskList] = useState([])
    useEffect(() => {
        fetch(`${API}/movies/${movie_id}/tasks`)
            .then((response) => response.json())
            .then(tasks => setTaskList(tasks.allTasks))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className="movie-detail-container">
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <th>
                            Todo(s):
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <th>
                            Production Task Name
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            Department
                        </th>
                        <th>
                            Cost
                        </th>
                        <th>
                            Completed
                        </th>
                    </tr>
                </tbody>

                <tbody>
                    {taskList.map((task, index) => {
                        return (<Task task_name={task.task_name}
                            description={task.description}
                            department={task.department}
                            cost={task.cost}
                            completed={task.completed}
                            key={task.id} />)
                    })}
                </tbody>
            </Table>
            <br></br>
            <div className="task">
                <Button className="btn btn-primary atlBtnColor btn-lg" onClick={() => navigate(-1)}>
                   <span>Back</span>
                    </Button>
            </div>
        </div>
    )
}
