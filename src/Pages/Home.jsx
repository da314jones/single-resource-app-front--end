import "./Home.css"

function Home() {
  
  return (
    <div className="animate__bounceIn">
      <div className="homeTitle">
        <div className="topTitle">
          Production Apprentice
        </div>
        <div className="subTitle">
          Bringing Movie Productions to Life
        </div>
      </div>
      <div className="grid-container">
        <div>
          <video className="video" controls autoPlay={true} muted loop >
            <source src="/home_film.mp4" type="video/mp4"/>
          </video>
        </div>
        <div className="logoDiv">
          <img className="home-container-image" src="/logo-removebg-preview.png" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Home;
