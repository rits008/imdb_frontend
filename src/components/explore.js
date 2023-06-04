import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Button, Typography, Grid, Paper, Box } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import EditMovieForm from "./EditMovieForm";

function Explore() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState(null);
  const [isEditOpen, setEditOpen] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(`http://localhost:58873/movies/${id}`);
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieData();
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleEdit = () => {
    setEditOpen(true);
  };

  const handleCloseEdit = () => {
    setEditOpen(false);
  };

  const handleSaveEdit = async (editedMovieData) => {
    try {
      const response = await fetch(`http://localhost:58873/movies/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedMovieData),
      });
      if (response.ok) {
        setMovieData(editedMovieData);
        setEditOpen(false);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:58873/movies/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Deleted successfully");
        alert("Movie Deleted Successfully");
        navigate(-1);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: 4, marginBottom: 4 }}>
      <Button
        variant="text"
        startIcon={<ArrowBack />}
        onClick={handleGoBack}
        sx={{ marginBottom: 4 }}
      >
        Go Back
      </Button>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={5} sx={{ height: "100%" }}>
            <img
              src={movieData.coverImage}
              alt="Movie Image"
              height="500"
              style={{ margin: 4 }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={5} sx={{ height: 500 }}>
            <Box p={2}>
              <Typography variant="h4" component="h1" gutterBottom>
                <strong>{movieData.name}</strong>
              </Typography>
              <Typography variant="body1" gutterBottom>
                {movieData.plot}
              </Typography>

              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1">
                  <strong>Producer: </strong>
                  {movieData.producer.name}
                </Typography>
                <Typography variant="subtitle1">
                  <strong>Actors:</strong>{" "}
                  {movieData.actors.map((actor) => actor.name).join(", ")}
                </Typography>
                <Typography variant="subtitle1">
                  <strong>Release Date:</strong>
                  {movieData.yearOfRelease}
                </Typography>
                <Typography variant="subtitle1">
                  <strong>Genre:</strong>{" "}
                  {movieData.genres.map((genre) => genre.name).join(", ")}
                </Typography>
              </Box>

              <Typography variant="h6" component="h2" sx={{ mt: 4 }}>
                <strong>Plot</strong>
              </Typography>
              <Typography variant="body1">{movieData.plot}</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4 }}>
        {/* <Button
          sx={{ m: 2 }}
          variant="outlined"
          color="primary"
          onClick={handleEdit}
        >
          Edit
        </Button> */}
        <Button variant="outlined" color="secondary" onClick={handleDelete}>
          Delete
        </Button>
      </Box>
      {/* <EditMovieForm
        movieData={movieData}
        isOpen={isEditOpen}
        onClose={handleCloseEdit}
        onSave={handleSaveEdit}
      /> */}
    </Container>
  );
}

export default Explore;
