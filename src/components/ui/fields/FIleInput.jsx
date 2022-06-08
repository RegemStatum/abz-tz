import React from "react";
import styles from "./FileInput.module.scss";

const FileInput = (props) => {
  const {
    required,
    errorMsg,
    name,
    fileName,
    handleFileUpload,
    accept = "/*/",
  } = props;
  let labelText = "Upload your photo";

  return (
    <div
      className={`${styles.container} ${errorMsg ? styles.error : ""} ${
        fileName ? styles.notEmpty : ""
      }`}
    >
      <input
        type="file"
        onChange={handleFileUpload}
        id={name}
        name={name}
        required={required}
        accept={accept}
        className={styles.input}
      />
      <label htmlFor={name} className={styles.label}>
        <button type="button" className={styles.uploadButton}>
          Upload
        </button>
        <p className={styles.labelText}>{fileName || labelText}</p>
      </label>
      {errorMsg && <p className={styles.errorText}>{errorMsg}</p>}
    </div>
  );
};

export default FileInput;
