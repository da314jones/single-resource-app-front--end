import "./Home.css"

function Home() {
  
  return (
    <div className="animate__bounceIn">
      <div className="homeTitle">
        <div className="topTitle">
          Production Apprentice
        </div>
        <div className="subTitle">
          Bringing Movie Prouctions to Life
        </div>
      </div>
      <div className="grid-container">
        <div>
          <video className="video" width="900" height="500" controls autoPlay={true} muted loop >
            <source src="/public/home_film.mp4" type="video/mp4"/>
          </video>
        </div>
        <div className="logoDiv">
          <img className="image" src="/public/logo.png" alt="logo" width="500" height="500"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
