


import {
  BrowserRouter as Router, Routes, Route 
} from "react-router-dom";
import Edit from "./Pages/Edit";
import EditActor from "./Pages/EditActor";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import IndexActorList from "./Pages/IndexActorList"
import New from "./Pages/New";
import NewActor from "./Pages/NewActor";
import Show from "./Pages/Show";
import ShowActor from "./Pages/ShowActor";
import NavBar from "./component/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {

  return (
    <>
    <div className='app'>
      <Router>
        <div className="nav">
          <NavBar />
        </div>
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Index />} />
          <Route path="/movies/new" element={<New />} />
          <Route exact path="/movies/:id" element={<Show />} />
          <Route path="/movies/:movie_id/actors" element={<IndexActorList />} />
          <Route path="/movies/:movie_id/actors/new" element={<NewActor />} />
          <Route path="/movies/:movie_id/actors/:id" element={<ShowActor />} />
          <Route path="/movies/:movie_id/actors/:id/edit" element={<EditActor />} />
          <Route path="/movies/:id/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
        </main>
      </Router>
    </div>
    </>
  )
}

export default App