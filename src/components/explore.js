import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { useLocation , useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/explore.css';
import image1 from '../images/image1.jpg';

function Explore({match}) {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  

  useEffect(() => {
    const fetchMovieData = async () => {
      const response = await fetch(`http://localhost:58873/movies/${id}`);
      const data = await response.json();
      setMovieData(data);
      console.log(data);
    };
    fetchMovieData();
  }, [id]);

  if (!movieData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      

      <div className="container mt-4 mb-4">
        <Button variant="light" className="mb-4" id="explore-close">
         close
        </Button>

        <div className="explore-container">
          <div className="row">
            <div className="col-12 col-md-6">
              <img src={movieData.coverImage} alt="movie image" />
            </div>

            <div className="col-12 col-md-6">
              <h1>{movieData.name}</h1>
              <p>
                {movieData.plot}
              </p>

              <ul>
                <li>Producer: {movieData.producer.name}</li>
                <li>Actors: {movieData.actors[0].name}</li>
                <li>Release Date: {movieData.yearOfRelease}</li>
                <li>Genre: {movieData.genres[0].name}</li>
              </ul>

              <h2>Plot</h2>

              <p>
                {movieData.plot}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
