import React, { useEffect } from 'react'
const API = import.meta.env.VITE_API_URL;

export default function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`${API}/movies`)
        .then(response => response.json())
        .then((responseJSON) => {
            console.log(responseJSON);
            setMovies(responseJSON.data.payload);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    
  return (
    <div className="movies-container">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this movies</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
              return <movie key={movie.id} movie={movie} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  )
}
