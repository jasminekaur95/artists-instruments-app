import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { filter } from "lodash";

// Importing the queries GET_ARTISTS, REMOVE_ARTIST. Using GET_ARTISTS to update the list immediately
import { GET_ARTISTS, REMOVE_ARTIST } from "../../queries";

import Button from "@material-ui/core/Button";

const RemoveArtist = ({ id, firstName, lastName }) => {
  const [removeArtist] = useMutation(REMOVE_ARTIST, {
    // updating the cache and destructing the data
    update(cache, { data: { removeArtist } }) {
      const { artists } = cache.readQuery({ query: GET_ARTISTS });
      cache.writeQuery({
        query: GET_ARTISTS,
        data: {
          artists: filter(artists, (o) => {
            return o.id !== removeArtist.id;
          }),
        },
      });
    },
  });
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        removeArtist({
          variables: {
            id,
          },
          optimisticResponse: {
            __typename: "Mutation",
            removeContact: {
              __typename: "Artist",
              id,
              firstName,
              lastName,
            },
          },
        });
      }}
      variant="contained"
      color="secondary"
      style={{ margin: "10px" }}
    >
      Delete
    </Button>
  );
};

export default RemoveArtist;
