import MovieList from "../component/MovieList";
import "./Index.css";

function Index() {
  return (
    <div className="index">
      <div className="indexTitle">
        Movie Production List
      </div>
      <MovieList />
    </div>
  );
}

export default Index;
