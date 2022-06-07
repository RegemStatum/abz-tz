import React from "react";
import styles from "./PrimaryButton.module.scss";

const PrimaryButton = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${disabled ? styles.disabled : ""}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
