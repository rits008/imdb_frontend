import React, { useState } from "react";
import { Container, Button, TextField, Paper } from "@mui/material";
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

function GenreCreation() {
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:58873/genres/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      if (response.ok) {
        console.log("created");
      } else {
        console.log("else");
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
          <LogoImage src="https://st2.depositphotos.com/1778941/8581/v/950/depositphotos_85813066-stock-illustration-movie-genre-elements.jpg" alt="Logo" />
            <h1>Create Genre</h1>
            <TextField
              label="Enter Genre Name"
              variant="filled"
              type="text"
              required
              onChange={handleInputChange}
              autoComplete="off"
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

export default GenreCreation;
