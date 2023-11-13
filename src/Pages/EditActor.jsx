import ActorEditForm from "../component/ActorEditForm";
import "./EditActor.css"

function EditActor() {
  return (
    <div className="new-edit-container">
      <div className="editTitle">
        Edit Movie Production Details
      </div>
      <ActorEditForm />
    </div>
  );
}

export default EditActor;
