import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";

const MovieListing = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(10);
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

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const paginate = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (error) {
    if (error) {
      return (
        <Container sx={{ marginTop: 4, marginBottom: 4, color: "white" }}>
          <Typography>
            <h1>Something went wrong. Failed to fetch movies.</h1>
          </Typography>
        </Container>
      );
    }
  }
  else if(movies.length===0 && error===false)
  {
    return (
      <Container sx={{ marginTop: 4, marginBottom: 4, color: "white" }}>
        <Typography>
          <h1>There are no movies. Please create some.</h1>
        </Typography>
      </Container>
    );
  }

  return (
    <>
      <Container sx={{ marginTop: 4, marginBottom: 4 }}>
        <Grid container spacing={2}>
          {currentMovies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <Box sx={{ borderRadius: "2px" }}>
                <Paper
                  elevation={5}
                  sx={{ height: "100%", backgroundColor: "rgb(35 48 66)" }}
                >
                  <CardMedia
                    component="img"
                    height="350"
                    image={movie.coverImage}
                    alt="Movie Poster"
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ color: "white" }}>
                    <h4>{movie.name}</h4>
                  </CardContent>
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      alignItems: "flex-end",
                    }}
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
        <Pagination
          count={Math.ceil(movies.length / moviesPerPage)}
          variant="outlined"
          shape="rounded"
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          page={currentPage}
          onChange={paginate}
          sx={{
            color: "white",
            textDecoration: "none",
            margin: 4,
            padding: 2,
            "& .MuiPagination-ul": {
              justifyContent: "center",
              "& .MuiPaginationItem-root": {
                color: "white",
              },
            },
          }}
        />
      </Container>
    </>
  );
};

export default MovieListing;
