import { Link } from "react-router-dom"

function Actor({ actor_name, actor_img, active, age, id, movie_id }) {
    return (
        <tr>
            <td>
                <Link to={`/movies/${movie_id}/actors/${id}`}>{actor_name}</Link>
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