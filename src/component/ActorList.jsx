import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import React from 'react'
import Actor from "./Actor";
import "./ActorList.css"
const API = import.meta.env.VITE_API_URL

function ActorList() {
  let navigate = useNavigate()
  let { movie_id } = useParams()
  const [actorList, setActorList] = useState([])
  useEffect(()=> {
    fetch(`${API}/movies/${movie_id}/actors`)
    .then((response) => response.json())
    .then( actors => setActorList(actors.allActors))
    .catch(error => console.log(error))
  }, [])
  const [actorOrder, setActorOrder] = useState(false)

  const changeOrderActor = () => {
    if(actorOrder===false){
      setActorOrder(true)
    fetch(`${API}/movies/${movie_id}/actors/?order=asc`)
    .then((response) => response.json())
    .then( actors => setActorList(actors.allActors))
    .then((res) => {
      navigate(`${API}/movies/${movie_id}/actors/?order=asc`)
    })
    .catch(error => console.log(error))
    }
    else{
      setActorOrder(false)
      fetch(`${API}/movies/${movie_id}/actors/?order=desc`)
    .then((response) => response.json())
    .then( actors => setActorList(actors.allActors))
    .then((res) => {
      navigate(`${API}/movies/${movie_id}/actors/?order=desc`)
    })
    .catch(error => console.log(error))
    }
  }
  const handleSortActors = event => {
    event.preventDefault()
    changeOrderActor()
  }
  
  return (
    <div className="Actors" >
        <table className="actorTable " >
          <tbody >
            <tr >
                <th > <button onClick={handleSortActors}>Actor Name {` \u21f3`}</button> </th>
                <th> Info </th>
                <th > Head Shot  </th>
            </tr>
          </tbody>
          <tbody >
            {actorList.map((actor, index) => {
              return <Actor actor_name={actor.artist_name} 
                             key={actor.id}
                             actor_img={actor.actor_img} 
                             active={actor.active} 
                             age={actor.age} 
                     />
            })}
          </tbody>
        </table>
    </div>
  )
}

export default ActorList
