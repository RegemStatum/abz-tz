import React, { useEffect, useState } from "react";
import RadioInput from "../ui/fields/RadioInput";
import { DEFAULT_POSITIONS } from "../../constants";
import Preloader from "../ui/loaders/Preloader";
import styles from "./SignUpPositions.module.scss";

const SignUpPositions = ({ selectedPosition, handlePositionChange }) => {
  const [positions, setPositions] = useState(DEFAULT_POSITIONS);
  const [isPositionsLoading, setIsPositionsLoading] = useState(true);

  useEffect(() => {
    async function fetchPositions() {
      try {
        setIsPositionsLoading(true);
        const response = await fetch(
          "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
        );
        const data = await response.json();

        if (!data.success) {
          throw new Error(data.message);
        }

        setPositions(data.positions);
      } catch (error) {
        console.log(error);
      } finally {
        setIsPositionsLoading(false);
      }
    }
    fetchPositions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isPositionsLoading) {
    return <Preloader />;
  }

  return (
    <div className={styles.container}>
      {positions.map((position) => {
        return (
          <RadioInput
            key={position.id}
            value={position.id}
            label={position.name}
            handleChange={handlePositionChange}
            checked={Number(selectedPosition) === position.id}
            name="position"
          />
        );
      })}
    </div>
  );
};

export default SignUpPositions;
