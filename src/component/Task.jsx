import { Link } from "react-router-dom"

function Task({ task_name, description, department, cost, completed  }) {
    return (
        <tr>
            <td>
                {task_name}
            </td>
            <td>
                {description}
            </td>
            <td>
                {department}
            </td>
            <td>
                {cost}
            </td>
            <td>
                {completed? "Yes" : "No"}
            </td>
        </tr>
    )
}

export default Task