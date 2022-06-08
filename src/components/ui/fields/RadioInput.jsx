import React from "react";
import styles from "./RadioInput.module.scss";

const RadioInput = ({ checked, value, handleChange, name, label }) => {
  return (
    <div className={styles.container}>
      <input
        type="radio"
        name={name}
        id={value}
        checked={checked}
        value={value}
        onChange={handleChange}
        className={styles.input}
      />
      <label htmlFor={value} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
