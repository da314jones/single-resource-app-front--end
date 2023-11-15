import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import Button from "react-bootstrap/Button";
import React from 'react'
import Table from "react-bootstrap/Table";
import Actor from "./Actor";
import "./ActorList.css"
const API = import.meta.env.VITE_API_URL

function ActorList() {
    let navigate = useNavigate()
    let { movie_id } = useParams()
    const [actorList, setActorList] = useState([])
    useEffect(() => {
        fetch(`${API}/movies/${movie_id}/actors`)
            .then((response) => response.json())
            .then(actors => setActorList(actors.allActors))
            .catch(error => console.log(error))
    }, [])
    const [actorOrder, setActorOrder] = useState(false)

    const changeOrderActor = () => {
        if (actorOrder === false) {
            setActorOrder(true)
            const newOrder = actorList.sort((a, b) => {
              if (a.actor_name.toLowerCase() < b.actor_name.toLowerCase())
                return -1
              else if (a.actor_name.toLowerCase() > b.actor_name.toLowerCase())
                return 1
              else
                return 0
            })
            setActorList(newOrder)
          }
          else {
            setActorOrder(false)
            const newOrder = actorList.sort((b, a) => {
              if (a.actor_name.toLowerCase() < b.actor_name.toLowerCase())
                return -1
              else if (a.actor_name.toLowerCase() > b.actor_name.toLowerCase())
                return 1
              else
                return 0
            })
            setActorList(newOrder)
          }
    }
    const handleSortActors = event => {
        event.preventDefault()
        changeOrderActor()
    }

    return (
        <div className="Actors" >
            <div className="sideArea">
                <Link className="atlBtnColor link" to={`/movies/${movie_id}/actors/new`}>Add Actor</Link>
                <Link className="atlBtnColor link" to={`/movies/${movie_id}`}>Back</Link>
            </div>
            <div className="containActors">
            <Table className="edit-table " striped bordered hover>
                    <tbody >
                        <tr >
                            <th >
                                <Button className="atlBtnColor btn-secondary btn-md" onClick={handleSortActors}>
                                    Actor Name {` \u21f3`}
                                </Button>
                            </th>
                            <th> Info </th>
                            <th > Head Shot  </th>
                        </tr>
                    </tbody>
                    <tbody >
                        {actorList.map((actor, index) => {
                            return <Actor actor_name={actor.actor_name}
                                key={actor.id}
                                actor_img={actor.actor_img}
                                active={actor.active}
                                age={actor.age}
                                id={actor.id}
                                movie_id={movie_id}
                            />
                        })}
                    </tbody>
                    </Table>
            </div>
        </div>
    )
}

export default ActorList
