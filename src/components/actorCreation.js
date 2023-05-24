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
  borderRadius: "50%",
});

function ActorCreation() {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    dob: undefined,
    gender: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:58873/actors/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
    <Container maxWidth="sm">
      <Box
        sx={{
          m: 4,
          p: 1,
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 5,
        }}
      >
        <Paper elevation={5}>
          <Form onSubmit={handleSubmit}>
            <LogoImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFj6WlBAWMBA6EHlNAcKDJCYb8OQjOZ1zeH6gvl-lhWJ3cpzp_nyQWT4NTLkeNu3TAbaw&usqp=CAU"
              alt="Logo"
            />
            <h1>Create Actor</h1>
            <TextField
              label="Actor Name"
              variant="filled"
              type="text"
              required
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              autoComplete="off"
              sx={{ width: "100%", m: 2 }}
            />
            <TextField
              label="Bio"
              variant="filled"
              multiline
              required
              rows={3}
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              sx={{ width: "100%", m: 2 }}
            />
            <TextField
              label="Date of Birth"
              variant="filled"
              type="date"
              name="dob"
              required
              value={formData.dob}
              onChange={handleInputChange}
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ width: "100%", m: 2 }}
            />
            <TextField
              select
              label="Gender"
              variant="filled"
              name="gender"
              required
              value={formData.gender}
              onChange={handleInputChange}
              sx={{ width: "100%", m: 2 }}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </TextField>
            <Button type="submit" variant="contained" color="primary">
              Add
            </Button>
          </Form>
        </Paper>
      </Box>
    </Container>
  );
}

export default ActorCreation;
