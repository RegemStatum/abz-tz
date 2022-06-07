import React from "react";
import styles from "./Hero.module.scss";
import PrimaryButton from "../../components/ui/buttons/PrimaryButton";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className="container">
        <div className={styles.heroInfoContainer}>
          <h1 className={styles.heading}>
            Test assignment for front-end developer
          </h1>
          <p className={styles.heroText}>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <PrimaryButton className={styles.signUpButton}>Sign up</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
