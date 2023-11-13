import ActorEditForm from "../component/ActorEditForm";
import "./EditActor.css"

function EditActor() {
  return (
    <div className="new-edit-container">
      <div className="editTitle">
        Edit Actor Details
      </div >
      <div className="form-container">
      <ActorEditForm />
      </div>
    </div>
  );
}

export default EditActor;
