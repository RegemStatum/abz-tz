import React, { useEffect, useRef, useState } from "react";
import styles from "./UserCard.module.scss";
import photoCover from "../../assets/images/photo-cover.svg";
import Tooltip from "../ui/tooltip/Tooltip";

const UserCard = ({ image, name, position, email, phone }) => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [isNameOverflow, setIsNameOverflow] = useState(false);
  const [isEmailOverflow, setIsEmailOverflow] = useState(false);

  // format phone number
  const phoneToShow = `${phone.slice(0, 3)} (${phone.slice(
    3,
    6
  )}) ${phone.slice(6, 9)} ${phone.slice(9, 11)} ${phone.slice(11, 13)}`;

  // check for name and email overflow
  useEffect(() => {
    if (!nameRef || !emailRef) {
      return;
    }

    if (nameRef.current.offsetWidth < nameRef.current.scrollWidth) {
      setIsNameOverflow(true);
    }

    if (emailRef.current.offsetWidth < emailRef.current.scrollWidth) {
      setIsEmailOverflow(true);
    }
  }, []);

  return (
    <div className={styles.container}>
      <img src={image || photoCover} alt={name} className={styles.image} />
      {isNameOverflow ? (
        <Tooltip tooltipText={name}>
          <p className={styles.name}>{name}</p>
        </Tooltip>
      ) : (
        <p className={styles.name} ref={nameRef}>
          {name}
        </p>
      )}
      <p className={styles.position}>{position}</p>
      {isEmailOverflow ? (
        <Tooltip tooltipText={email}>
          <p className={styles.email}>{email}</p>
        </Tooltip>
      ) : (
        <p className={styles.email} ref={emailRef}>
          {email}
        </p>
      )}
      <p className={styles.phone}>{phoneToShow}</p>
    </div>
  );
};

export default UserCard;
