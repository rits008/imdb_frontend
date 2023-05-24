import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

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
    <Container maxWidth="xl" sx={{ marginTop: 4, marginBottom: 4 }}>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <Paper elevation={5} sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="200"
                image={movie.coverImage}
                alt="Movie Poster"
              />
              <CardContent>
                <h4>{movie.name}</h4>
              </CardContent>
              <CardContent sx={{ flexGrow: 1, display: "flex", alignItems: "flex-end" }}>
                <Button
                  component={Link}
                  to={{
                    pathname: `/explore/${movie.id}`,
                    state: { movieData: movie },
                  }}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Explore
                </Button>
              </CardContent>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MovieListing;
