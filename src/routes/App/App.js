import React from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";
import { HomeButtons } from "../../components/HomeButtons";
import { Intro } from "./Intro";

export const App = () => {
  return (
    <Container className="full_home_site">
      <HomeButtons />
      <Intro />
    </Container>
  );
};
