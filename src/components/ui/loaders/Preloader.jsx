import React from "react";
import styles from "./Preloader.module.scss";
import preloader from "../../../assets/images/preloader.svg";

const Preloader = () => {
  return <img src={preloader} alt="preloader" className={styles.preloader} />;
};

export default Preloader;
