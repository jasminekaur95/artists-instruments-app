// This will contains all the instruments
import React from "react";

import { useQuery } from "@apollo/react-hooks";
import { GET_INSTRUMENTS } from "../../queries/index";

import List from "@material-ui/core/List";
import Container from "@material-ui/core/Container";

const Instruments = () => {
  const { loading, error, data } = useQuery(GET_INSTRUMENTS);
  if (loading) return "Loading...";
  if (error) return `Errror! ${error.message}`;
  console.log("data", data);
  return <ul></ul>;
};

export default Instruments;
