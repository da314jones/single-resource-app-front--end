import MovieList from "../component/MovieList";
import "./Index.css";

function Index() {
  return (
    <div className="index">
      <h2 className="index-h2">Movie Production List</h2>
      <MovieList />
    </div>
  );
}

export default Index;
