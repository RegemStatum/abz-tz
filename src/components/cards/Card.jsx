import React from "react";
import styles from "./Card.module.scss";
import photoCover from "../../assets/images/photo-cover.svg";

const Card = ({ image, name, position, email, phone }) => {
  return (
    <div className={styles.container}>
      <img src={image || photoCover} alt={name} className={styles.image} />
      <p className={styles.name}>{name}</p>
      <p className={styles.position}>{position}</p>
      <p className={styles.email}>{email}</p>
      <p className={styles.phone}>{phone}</p>
    </div>
  );
};

export default Card;
