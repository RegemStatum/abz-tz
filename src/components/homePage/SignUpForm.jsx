import React, { useState, useRef } from "react";
import Input from "../ui/fields/Input";
import FileInput from "../ui/fields/FileInput.jsx";
import styles from "./SignUpForm.module.scss";
import SignUpPositions from "./SignUpPositions";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import validateSignUpForm from "../../utils/formValidation";

const SignUpForm = ({ setIsUserRegistrationSuccess }) => {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const [selectedPosition, setSelectedPosition] = useState("1");
  const [selectedFile, setSelectedFile] = useState();
  const [inputError, setInputError] = useState({
    name: "",
    message: "",
  });
  const [isFormResLoading, setIsFormResLoading] = useState(false);

  const handlePositionChange = (e) => {
    setSelectedPosition(e.target.value);
  };

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const getToken = async () => {
    const response = await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/token"
    );
    const data = await response.json();
    return data.token;
  };

  const postFormData = async (formData) => {
    const token = await getToken();

    const response = await fetch(
      " https://frontend-test-assignment-api.abz.agency/api/v1/users",
      {
        method: "POST",
        body: formData,
        headers: {
          Token: token,
        },
      }
    );

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsFormResLoading(true);
    setInputError({
      name: "",
      message: "",
    });

    const name = nameInputRef.current?.value;
    const email = emailInputRef.current?.value;
    const phone = phoneInputRef.current?.value;

    // format values
    const formattedPhone =
      phone.substring(0, 3) +
      phone.substring(5, 8) +
      phone.substring(10, 13) +
      phone.substring(16, 18) +
      phone.substring(21, 23);
    const formattedPosition = Number(selectedPosition);

    // form validation
    const inputErrorObj = validateSignUpForm(
      name,
      email,
      formattedPhone,
      formattedPosition,
      selectedFile
    );

    // return if form is not valid
    if (inputErrorObj.name && inputErrorObj.message) {
      setInputError(inputErrorObj);
      setIsFormResLoading(false);
      return;
    }

    const data = {
      name,
      email,
      phone: formattedPhone,
      position_id: selectedPosition,
      photo: selectedFile,
    };

    const formData = new FormData();

    for (const name in data) {
      formData.append(name, data[name]);
    }

    try {
      await postFormData(formData);
      setIsUserRegistrationSuccess(true);
    } catch (error) {
      setInputError({ error });
      console.log(error);
    } finally {
      setIsFormResLoading(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.form}>
      {/* name, email, phone */}
      <Input
        type="text"
        ref={nameInputRef}
        label="Your name"
        required
        name="name"
        errorMsg={inputError.name === "name" && inputError.message}
        className={styles.nameInput}
      />
      <Input
        type="email"
        ref={emailInputRef}
        label="Email"
        required
        name="email"
        errorMsg={inputError.name === "email" && inputError.message}
        className={styles.emailInput}
      />
      <Input
        type="tel"
        ref={phoneInputRef}
        label="Phone"
        required
        name="phone"
        helperText="+38 (0XX) XXX - XX - XX"
        pattern="\+38\s\([0-9]{3}\)\s[0-9]{3}\s-\s[0-9]{2}\s-\s[0-9]{2}"
        errorMsg={inputError.name === "phone" && inputError.message}
        className={styles.phoneInput}
      />
      {/* position */}
      <div className={styles.positionsContainer}>
        <p className={styles.positionsHeading}>Select your position</p>
        <SignUpPositions
          selectedPosition={selectedPosition}
          handlePositionChange={handlePositionChange}
        />
      </div>
      {/* file upload */}
      <FileInput
        required
        name="photo"
        accept=".jpg,.jpeg"
        handleFileUpload={handleFileUpload}
        fileName={selectedFile?.name}
        errorMsg={inputError.name === "photo" && inputError.message}
      />
      {/* submit button */}
      <PrimaryButton
        className={styles.signUpButton}
        disabled={isFormResLoading}
      >
        Sign up
      </PrimaryButton>
    </form>
  );
};

export default SignUpForm;
