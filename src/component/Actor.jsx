import { Link } from "react-router-dom"
import "./Actor.css"

function Actor({ actor_name, actor_img, active, age }) {
    return (
        <tr>
            <td>
                {actor_name}
            </td>
            <td>
                Age: {age}
                <br></br>
                {active?`Active on payrole`:`Not Working`}
            </td>
            <td>
                <div className="actorImg">
                    <img src={`${actor_img}`} 
                         alt={`Image of ${actor_name}`}
                        style={{ height: "300px" }}/>
                </div>
            </td>
        </tr>
    )
}

export default Actor