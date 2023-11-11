

function Home() {
  
  return (
    <div className="animate__bounceIn">
      <h2>Welcome</h2>
      <h3>Production apprentice</h3>
      <video width="320" height="240" controls autoplay="true" muted loop playinline>
        <source src="/public/home_film.mp4" type="video/mp4"/>
      </video>
    </div>
  );
}

export default Home;
