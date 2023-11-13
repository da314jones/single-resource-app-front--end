import ActorDetails from "../component/ActorDetails"
import "./ShowActor.css"

function ShowActor(){
    return (
        <div className="ShowActor">
            <h1 className="titleShowActor"> Actor Details</h1>
            <ActorDetails />
        </div>
    )
}

export default ShowActor