import React from "react";

import Services from "../Services";
import ExpertTeam from "../ExpertTeam";

import Media from "../Media";
import HeroPage from "../Hero";
import QuestionsPage from "../Questions";
import FormPage from "../../components/form/Form";
import Clients from "../Clients";

const HomePage = () => {
  return (
    <>
      <HeroPage />
      <Services />
      <ExpertTeam />
      <Clients />
      <Media />
      <QuestionsPage />
      <FormPage />
    </>
  );
};

export default HomePage;
