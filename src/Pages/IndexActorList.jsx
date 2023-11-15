import ActorList from "../component/ActorList"
import "./IndexActorList.css"

function IndexActorList() {
    return (
        <div className="ActorIndex">
            <div className="actorTitleIndex">Contracted Actors</div>
            <ActorList />
        </div>
    )
}

export default IndexActorList