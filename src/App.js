import logo from './logo.svg';
import './App.css';
import Explore from './components/explore';
import ActorCreation from './components/actorCreation';
import ProducerCreation from './components/producerCreation';
import MovieCreation from './components/movieCreation';
import MovieListing from './components/movieListing';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavBar from './components/Navbar';
function App() {
  
  return (
    <>
    <NavBar/>
    <Router>
      <div className="App">
        <Routes>
         
          <Route exact path="/" element={<MovieListing />} />
          <Route path="/explore/:id" element={<Explore />} />
          <Route path="/moviecreation" element={<MovieCreation />} />
          <Route path="/actorcreation" element={<ActorCreation />} />
          <Route path="/producercreation" element={<ProducerCreation />} />
        </Routes>
      </div>
    </Router>
    </>
  
  );
}

export default App;
