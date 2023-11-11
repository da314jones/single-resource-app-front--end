import MovieEditForm from "../component/MovieEditForm";
import "./Edit.css"


function Edit() {

  return (
    <div className="new-edit">
      <h2>Edit</h2>
      <MovieEditForm />
      <img src="/edit.png" />
    </div>
  );
}

export default Edit;
