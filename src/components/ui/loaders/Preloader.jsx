import React from "react";
import styles from "./Preloader.module.scss";
import preloader from "../../../assets/images/preloader.svg";

const Preloader = ({ className = "" }) => {
  return (
    <img
      src={preloader}
      alt="preloader"
      className={`${styles.preloader} ${className}`}
    />
  );
};

export default Preloader;
