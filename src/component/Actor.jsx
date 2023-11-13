import { Link } from "react-router-dom"
import "./Actor.css"

function Actor({ actor_name, actor_img, active, age }) {
    return (
        <tr>
            <td>
                {actor_name}
            </td>
            <td>
                {age}
                <br></br>
                {active}
            </td>
            <td >
                <img src={`${actor_img}`} />
            </td>
        </tr>
    )
}

export default Actor