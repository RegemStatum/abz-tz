import React from "react";
import Header from "../components/layout/Header";
import { GetRequestSection, Hero } from "../components/homePage";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <GetRequestSection />
      </main>
    </>
  );
};

export default HomePage;
