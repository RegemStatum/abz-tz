import React, { useEffect, useState } from "react";
import styles from "./GetRequestSection.module.scss";
import Title from "../ui/title/Title";
import UsersGrid from "../users/UsersGrid";
import Preloader from "../ui/loaders/Preloader";
import PrimaryButton from "../ui/buttons/PrimaryButton";

const GetRequestSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [isShowMoreButtonVisible, setIsShowMoreButtonVisible] = useState(true);
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const USERS_COUNT = 6;

  useEffect(() => {
    async function fetchUsers() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${USERS_COUNT}`
        );
        const data = await response.json();

        console.log(data);

        if (!data.success) {
          throw new Error(data.message);
        }

        if (data.total_pages === page) {
          setIsShowMoreButtonVisible(false);
        } else {
          setUsers([...users, ...data.users]);
        }
      } catch (error) {
        setErrorMsg(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUsers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleShowMoreButtonClick = () => {
    setPage(page + 1);
  };

  const pageContent = errorMsg ? (
    <Title>{errorMsg}</Title>
  ) : isLoading ? (
    <Preloader className={styles.preloader} />
  ) : (
    isShowMoreButtonVisible && (
      <PrimaryButton
        className={styles.showMoreButton}
        onClick={handleShowMoreButtonClick}
      >
        Show more
      </PrimaryButton>
    )
  );

  return (
    <div className={styles.sectionContainer}>
      <div className="container">
        <Title>Working with GET request</Title>
        <UsersGrid users={users} />
        {pageContent}
      </div>
    </div>
  );
};

export default GetRequestSection;
