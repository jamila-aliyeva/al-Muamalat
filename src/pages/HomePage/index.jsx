import React from "react";

import Services from "../Services";
import ExpertTeam from "../ExpertTeam";
import Clients from "../clients";
import Media from "../Media";
import HeroPage from "../Hero";
import QuestionsPage from "../Questions";
import FormPage from "../../components/form/Form";

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
