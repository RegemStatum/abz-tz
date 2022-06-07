import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.svg";
import PrimaryButton from "../../components/ui/buttons/PrimaryButton";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.innerContainer}`}>
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.headerButtons}>
          <PrimaryButton>Users</PrimaryButton>
          <PrimaryButton>Sign Up</PrimaryButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
