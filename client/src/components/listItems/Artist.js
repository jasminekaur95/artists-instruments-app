import React, { Fragment, useState } from "react";

import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

import RemoveArtist from "../buttons/RemoveArtist";
import DisplayCard from "../cards/DisplayCard";
import UpdateArtist from "../forms/UpdateArtist";

const useStyles = makeStyles({
  label: {
    textDecoration: "none",
  },
});

const Artist = (props) => {
  const [id] = useState(props.id);
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);

  // Initially setting the value of editMode as false
  const [editMode, setEditMode] = useState(false);

  // Handle click function contains the setter function for the editMode
  const handleButtonClick = () => {
    setEditMode(!editMode);
  };

  const updateStateVariable = (variable, value) => {
    switch (variable) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      default:
        break;
    }
  };

  const fullName = () => {
    return `${firstName} ${lastName}`;
  };

  const classes = useStyles();
  return (
    <DisplayCard>
      <Fragment>
        {editMode ? (
          // If editMode is true, rendering updateContact form
          <UpdateArtist
            id={props.id}
            firstName={props.firstName}
            lastName={props.lastName}
            onButtonClick={handleButtonClick}
            updateStateVariable={updateStateVariable}
          />
        ) : (
          <>
            <ListItem>
              <ListItemText primary={fullName()} />
              <Button
                onClick={() => {
                  // On click of the button, changing the editMode to true
                  setEditMode(true);
                }}
                variant="contained"
                style={{ margin: "5px" }}
              >
                Edit
              </Button>
              <RemoveArtist
                id={props.id}
                firstName={props.firstName}
                lastName={props.lastName}
              />
            </ListItem>
            <CardActions>
              <Button color="primary" size="small" variant="outlined">
                Learn More
              </Button>
            </CardActions>
          </>
        )}
      </Fragment>
    </DisplayCard>
  );
};

export default Artist;
