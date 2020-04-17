import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { v4 as uuidv4 } from "uuid";
import MenuItem from "@material-ui/core/MenuItem";

// import { ADD_ARTIST, GET_ARTISTS } from "../../queries/index";

const artistNames = [
  {
    value: "johnElton",
    label: "John Elton",
  },
  {
    value: "ericClapton",
    label: "Eric Clapton",
  },
];

const AddInstrument = () => {
  const [artistName, setArtistName] = React.useState("Eric Clapton");

  const handleChange = (event) => {
    setArtistName(event.target.value);
  };

  return (
    <form>
      <TextField
        label="Year"
        margin="normal"
        variant="outlined"
        fullWidth
        style={{ margin: "10px" }}
      />
      <TextField
        label="Brand"
        placeholder="i.e. Smith"
        margin="normal"
        variant="outlined"
        fullWidth
        style={{ margin: "10px" }}
      />
      <TextField
        label="Type"
        margin="normal"
        variant="outlined"
        fullWidth
        style={{ margin: "10px" }}
      />
      <TextField
        label="Price"
        placeholder="i.e. Smith"
        margin="normal"
        variant="outlined"
        fullWidth
        style={{ margin: "10px" }}
      />
      <TextField
        id="outlined-select-artist"
        select
        value={artistName}
        defaultValue={artistName}
        onChange={handleChange}
        s
        variant="outlined"
        fullWidth
      >
        {artistNames.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginTop: "20px", alignItems: "center", marginLeft: "10px" }}
      >
        Add Instrument
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        style={{ marginTop: "20px", alignItems: "center", marginLeft: "10px" }}
      >
        Cancel
      </Button>
    </form>
  );
};

export default AddInstrument;
