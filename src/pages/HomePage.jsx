import React, { useState } from "react";
import Header from "../components/layout/Header";
import {
  GetRequestSection,
  Hero,
  PostRequestSection,
} from "../components/homePage";

const HomePage = () => {
  const [isUserRegistrationSuccess, setIsUserRegistrationSuccess] =
    useState(false);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <GetRequestSection
          isUserRegistrationSuccess={isUserRegistrationSuccess}
        />
        <PostRequestSection
          isUserRegistrationSuccess={isUserRegistrationSuccess}
          setIsUserRegistrationSuccess={setIsUserRegistrationSuccess}
        />
      </main>
    </>
  );
};

export default HomePage;
