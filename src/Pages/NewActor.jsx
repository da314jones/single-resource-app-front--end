import ActorNewForm from "../component/ActorNewForm";
import "./NewActor.css"

function NewActor() {

  return (
    <div className="topNewPage">
      <div className="newTitle">
        Add Actor
      </div>
      <div className="form-container"> 
        <ActorNewForm />
      </div>
    </div>
  );
}

export default NewActor;