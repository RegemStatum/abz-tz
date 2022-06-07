import React from "react";
import styles from "./PrimaryButton.module.scss";

const PrimaryButton = ({ children, onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${className || ""} ${
        disabled ? styles.disabled : ""
      }`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
