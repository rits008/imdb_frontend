import logo from './logo.svg';
import './App.css';
import Explore from './components/Explore';
import ActorCreation from './components/ActorCreation';
import ProducerCreation from './components/ProducerCreation';
import MovieCreation from './components/MovieCreation';
import MovieListing from './components/MovieListing';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavBar from './components/Navbar';
import GenreCreation from './components/GenreCreation';
import Footer from './components/Footer';
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
          <Route path="/genrecreation" element={<GenreCreation/>}/>
        </Routes>
      </div>
    </Router>
    <Footer/>
    </>
  
  );
}

export default App;
