import "./Home.css"

function Home() {
  
  return (
    <div className="animate__bounceIn">
      <h2>Production Apprentice</h2>
      <h3>Bringing Movie Prouctions to Life</h3>
      <div className="grid-container">
        <div>
          <video className="video" width="900" height="500" controls autoPlay={true} muted loop >
            <source src="/public/home_film.mp4" type="video/mp4"/>
          </video>
        </div>
        <div>
          <img className="image" src="/public/logo.png" alt="logo" width="500" height="500"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
