import React from "react";
import styles from "./PostRequestSection.module.scss";
import Title from "../ui/title/Title";
import SignUpForm from "./SignUpForm";
import successImg from "../../assets/images/success-image.svg";

const PostRequestSection = ({
  isUserRegistrationSuccess,
  setIsUserRegistrationSuccess,
}) => {
  return (
    <div className={styles.sectionContainer}>
      <div className="container">
        {isUserRegistrationSuccess ? (
          <>
            <Title>User successfully registered</Title>
            <img
              src={successImg}
              alt="registration success"
              className={styles.successImg}
            />
          </>
        ) : (
          <>
            <Title>Working with POST request</Title>
            <SignUpForm
              isUserRegistrationSuccess={isUserRegistrationSuccess}
              setIsUserRegistrationSuccess={setIsUserRegistrationSuccess}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default PostRequestSection;
