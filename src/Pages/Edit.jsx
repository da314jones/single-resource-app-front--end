import MovieEditForm from "../component/MovieEditForm";
import "./Edit.css"
function Edit() {

  return (
    <div className="new-edit-container">
      <div className="editTitle">
        Edit Movie Production Details
      </div>
      <MovieEditForm />
    </div>
  );
}

export default Edit;
