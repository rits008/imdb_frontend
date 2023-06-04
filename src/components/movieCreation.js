import React, { useState, useEffect } from "react";
import { Container, Button, TextField, Paper, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";

const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "32px",
});
const LogoImage = styled("img")({
  width: "100px",
  height: "100px",
  marginBottom: "16px",
  borderRadius:"50%",
});

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
    const selectedActors = Array.isArray(e.target.value) ? e.target.value.map(Number) : [];
    setFormData((prevData) => ({
      ...prevData,
      actorsId: selectedActors,
    }));
  };

  const handleProducerSelection = (e) => {
    const producerId = Number(e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      producerId,
    }));
  };

  const handleGenreSelection = (e) => {
    const selectedGenres = Array.isArray(e.target.value)
      ? e.target.value.map((genreValue) => {
          const [genreId, genreName] = genreValue.split(":");
          return { id: Number(genreId), name: genreName };
        })
      : [];
    setFormData((prevData) => ({
      ...prevData,
      genres: selectedGenres,
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
        // handle success
        alert("Movie Created succesfully");
        setFormData({
          name: "",
          yearOfRelease: "",
          plot: "",
          actorsId: [],
          genres: [],
          producerId: "",
          coverImage: "",
        });
      } else {
        // handle error
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            m: 4,
            p: 1,
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: 5,
          }}
        ><Paper elevation={5}>
          <Form onSubmit={handleSubmit}>
          <LogoImage src="https://i.pinimg.com/736x/7c/32/cf/7c32cf179c28869753c33028b06d443b.jpg" alt="Logo" />
            <h1>Create Movie</h1>
            <TextField
              label="Movie Name"
              variant="filled"
              type="text"
              required
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              sx={{ width: "100%", m: 2 }}
            />
            <TextField
              label="Year of Release"
              variant="filled"
              type="number"
              required
              name="yearOfRelease"
              value={formData.yearOfRelease}
              onChange={handleInputChange}
              sx={{ width: "100%", m: 2 }}
            />

            <FormControl sx={{ width: "100%", m: 2 }}>
              <InputLabel id="actors-label">Actors</InputLabel>
              <Select
                multiple
                required
                labelId="actors-label"
                variant="filled"
                name="actorsId"
                value={formData.actorsId}
                onChange={handleActorSelection}
              >
                {actors.map((actor) => (
                  <MenuItem key={actor.id} value={actor.id}>
                    {actor.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ width: "100%", m: 2 }}>
              <InputLabel id="producer-label">Producers</InputLabel>
              <Select
                required
                labelId="producer-label"
                variant="filled"
                name="producerId"
                value={formData.producerId}
                onChange={handleProducerSelection}
              >
                {producers.map((producer) => (
                  <MenuItem key={producer.id} value={producer.id}>
                    {producer.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ width: "100%", m: 2 }}>
              <InputLabel id="genres-label">Genres</InputLabel>
              <Select
                multiple
                required
                labelId="genres-label"
                variant="filled"
                name="genres"
                value={formData.genres.map((genre) => `${genre.id}:${genre.name}`)}
                onChange={handleGenreSelection}
              >
                {genres.map((genre) => (
                  <MenuItem key={genre.id} value={`${genre.id}:${genre.name}`}>
                    {genre.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Plot"
              variant="filled"
              multiline
              rows={3}
              required
              name="plot"
              value={formData.plot}
              onChange={handleInputChange}
              sx={{ width: "100%", m: 2 }}
            />
            <TextField
              label="Poster (URL)"
              variant="filled"
              multiline
              rows={3}
              required
              name="coverImage"
              value={formData.coverImage}
              onChange={handleInputChange}
              sx={{ width: "100%", m: 2 }}
            />
            <div>
              <Button type="submit" variant="contained" color="primary">
                Add
              </Button>
            </div>
          </Form>
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default MovieCreation;
