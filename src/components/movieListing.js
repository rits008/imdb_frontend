import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";

const MovieListing = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const fetchMovies = async () => {
    try {
      const response = await fetch("http://localhost:58873/movies/");
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  if (error || movies.length === 0) {
    if (error) {
      return (
        <Container sx={{ marginTop: 4, marginBottom: 4, color: "white" }}>
          <Typography>
            <h1>something went wrong . Failed to fetch movies</h1>
          </Typography>
        </Container>
      );
    } else {
      return (
        <Container sx={{ marginTop: 4, marginBottom: 4, color: "white" }}>
          <Typography>
            <h1>There are no movie , Please Create</h1>
          </Typography>
        </Container>
      );
    }
  }

  return (
    <Container sx={{ marginTop: 4, marginBottom: 4 }}>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <Box sx={{ borderRadius: "2px" }}>
              <Paper
                elevation={5}
                sx={{ height: "100%", backgroundColor: "rgb(35 48 66)" }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={movie.coverImage}
                  alt="Movie Poster"
                />
                <CardContent sx={{ color: "white" }}>
                  <h4>{movie.name}</h4>
                </CardContent>
                <CardContent
                  sx={{ flexGrow: 1, display: "flex", alignItems: "flex-end" }}
                >
                  <Button
                    component={Link}
                    to={{
                      pathname: `/explore/${movie.id}`,
                      state: { movieData: movie },
                    }}
                    variant="outlined"
                    color="primary"
                    sx={{ color: "white", textDecoration: "none" }}
                    fullWidth
                  >
                    Explore
                  </Button>
                </CardContent>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MovieListing;
