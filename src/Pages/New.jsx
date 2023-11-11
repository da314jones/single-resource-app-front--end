import MovieNewForm from "../component/MovieNewForm";
import "./New.css"

function New() {

  return (
    <>
      <h2>Create New Movie</h2>
        <div className="form-container">
          <MovieNewForm />
      <div className="right-container">
        <img src="/right-angle.png" alt="right angle camera view" />
        </div>
      </div>
    </>
  );
}

export default New;