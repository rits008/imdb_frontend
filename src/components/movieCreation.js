import React, { useState, useEffect } from "react";
import "./styles/movie_creation.css";

function MovieCreation() {
  const [actors, setActors] = useState([]);
  const [producers, setProducers] = useState([]);
  const [genres, setGenres] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    yearOfRelease: "",
    plot: "",
    actorsId: [],
    genres: [],
    producerId: "",
    coverImage: "",
  });

  const fetchActors = async () => {
    try {
      const response = await fetch("http://localhost:58873/actors/");
      const data = await response.json();
      setActors(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProducers = async () => {
    try {
      const response = await fetch("http://localhost:58873/producers/");
      const data = await response.json();
      setProducers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchGenres = async () => {
    try {
      const response = await fetch("http://localhost:58873/genres/");
      const data = await response.json();
      setGenres(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchActors();
    fetchProducers();
    fetchGenres();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };
  const handleActorSelection = (e) => {
    const selectedActors = Array.from(e.target.selectedOptions, (option) =>
      Number(option.value)
    );
    setFormData((prevData) => ({
      ...prevData,
      actorsId: selectedActors,
    }));
  };

  const handleGenreSelection = (e) => {
    const selectedGenres = Array.from(e.target.selectedOptions, (option) => {
      const genreId = Number(option.value.split(":")[0]); // Extract the ID from the option value
      const genreName = option.text.trim(); // Use the option text as the name
      return { id: genreId, name: genreName };
    });
    setFormData((prevData) => ({
      ...prevData,
      Genres: selectedGenres, // Update the property name to match the payload structure
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:58873/movies/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mt-4 mb-4">
        <form className="p-4 movie-creation" onSubmit={handleSubmit}>
          <div className="form-group pb-4">
            <label htmlFor="exampleInputMovie">Movie Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputMovie"
              name="name"
              placeholder="Enter Movie Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group pb-4">
            <label htmlFor="exampleInputYearOfRelease">Year of Release</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputYearOfRelease"
              name="yearOfRelease"
              placeholder="Enter Release Year"
              value={formData.yearOfRelease}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group pb-2">
            <label htmlFor="exampleFormControlActor">Actor</label>
            <select
              className="form-control"
              id="exampleFormControlActor"
              multiple
              name="actorsId"
              value={formData.actorsId}
              onChange={handleActorSelection}
            >
              {actors.map((actor) => (
                <option key={actor.id} value={actor.id}>
                  {actor.id} {actor.name}
                </option>
              ))}
            </select>
          </div>
         

          <div className="form-group pb-2">
            <label htmlFor="exampleFormControlProducer">Producer</label>
            <select
              className="form-control"
              id="exampleFormControlProducer"
              name="producerId"
              value={formData.producerId}
              onChange={handleInputChange}
            >
              {producers.map((producer) => (
                <option key={producer.id} value={producer.id}>
                  {producer.name}
                </option>
              ))}
            </select>
          </div>
         

          <div className="form-group pb-4">
            <label htmlFor="exampleFormControlGenre">Genre</label>
            <select
              className="form-control"
              id="exampleFormControlGenre"
              multiple
              onChange={handleGenreSelection}
            >
              {genres.map((genre) => (
                <option key={genre.id} value={`${genre.id}:${genre.name}`}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group pb-4">
            <label htmlFor="exampleFormControlTextarea1">Plot</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="plot"
              placeholder="Enter Plot Here"
              value={formData.plot}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="form-group pb-4">
            <label htmlFor="exampleFormControlTextarea1">Poster(URL)</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="coverImage"
              placeholder="Enter Poster URL"
              value={formData.coverImage}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default MovieCreation;
