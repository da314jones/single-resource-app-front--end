import ActorNewForm from "../component/ActorNewForm";
import "./NewActor.css"

function NewActor() {

  return (
    <div className="topNewPage">
        Add Actor
      <div className="newTitle">
      <div className="left-container-newForm">
        <img src="/desi.png" alt="" />
      </div>
      <div className="spacer2">
        <ActorNewForm />
      </div>
      </div>
    </div>
  );
}

export default NewActor;