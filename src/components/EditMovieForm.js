import React, { useState } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

function EditMovieForm({ movieData, isOpen, onClose, onSave }) {
  const [editedMovieData, setEditedMovieData] = useState(movieData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedMovieData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedMovieData);
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Edit Movie</DialogTitle>
      <DialogContent>
        <TextField
          label="Movie Name"
          name="name"
          value={editedMovieData.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          type="number"
          label="Year of Release"
          name="yearOfRelease"
          value={editedMovieData.yearOfRelease}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Plot"
          name="plot"
          value={editedMovieData.plot}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <FormControl sx={{ width: "100%", m: 2 }}>
          <InputLabel id="actors-label">Actors</InputLabel>
          <Select
            multiple
            required
            labelId="actors-label"
            variant="filled"
            name="actorsId"
            value={editedMovieData.actorsId}
            onChange={handleInputChange}
          >
            {movieData.actors.map((actor) => (
              <MenuItem key={actor.id} value={actor.id}>
                {actor.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Producer"
          name="producerId"
          value={editedMovieData.producerId}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Cover Image (URL)"
          name="coverImage"
          value={editedMovieData.coverImage}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
 
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditMovieForm;
