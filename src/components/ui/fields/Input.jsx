import React from "react";
import styles from "./Input.module.scss";

const Input = React.forwardRef((props, ref) => {
  const { type, label, helperText, required, errorMsg, name = "" } = props;
  const isHelperTextShown = helperText || errorMsg;

  return (
    <div className={`${styles.container} ${errorMsg ? styles.error : ""}`}>
      <div className={styles.inputContainer}>
        <input
          ref={ref}
          type={type}
          required={required}
          className={styles.input}
          id={name}
          name={name}
          placeholder=" "
        />
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      </div>
      {isHelperTextShown && (
        <p className={styles.helperText}>{errorMsg || helperText}</p>
      )}
    </div>
  );
});

export default Input;
