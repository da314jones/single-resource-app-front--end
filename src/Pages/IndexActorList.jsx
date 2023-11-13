import ActorList from "../component/ActorList"
import "./IndexActorList.css"

function IndexActorList() {
    return (
        <div className="ActorIndex">
            <h1 className="actorTitleIndex">Contracted Actors For Movie </h1>
            <ActorList />
        </div>
    )
}

export default IndexActorList