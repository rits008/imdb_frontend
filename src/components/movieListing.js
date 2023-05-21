import React, { useEffect, useState } from "react";
import image1 from "../images/image1.jpg";
import "./styles/movie_listing.css";
import { Link } from "react-router-dom";

const MovieListing = () => {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    try {
      const response = await fetch("http://localhost:58873/movies/");
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="container mt-4 listing-container">
        <div className="row m-4">
          {movies.map((movie) => (
            <div className="col-xl-3">
              <div className="card p-3 m-2">
                <img
                  className="card-img-top"
                  style={{ height: "200px" }}
                  src={movie.coverImage}
                  alt="Movie Poster"
                />
                <div className="card-header">
                  <h4>{movie.name}</h4>
                </div>
                <div className="card-body">
                  <p>{movie.plot}</p>
                </div>
                <div className="card-footer row">
                  <div className="col-8">
                    <Link
                      to={{
                        pathname: `/explore/${movie.id}`,
                        state: { movieData: movie },
                      }}
                    >
                      Explore -&gt;
                    </Link>
                  </div>
                  <div className="col-2 text-primary">
                    <span className="material-symbols-outlined"> edit </span>
                  </div>
                  <div className="col-2 text-danger">
                    <span className="material-symbols-outlined"> delete </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
