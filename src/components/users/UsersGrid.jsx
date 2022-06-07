import React from "react";
import styles from "./UsersGrid.module.scss";
import UserCard from "./UserCard";

const UsersGrid = ({ users }) => {
  console.log("users", users);

  return (
    <div className={styles.gridContainer}>
      {users.map((user, index) => {
        const { photo, position, email, phone, name } = user;
        return (
          <UserCard
            key={index}
            image={photo}
            position={position}
            email={email}
            phone={phone}
            name={name}
          />
        );
      })}
    </div>
  );
};

export default UsersGrid;
