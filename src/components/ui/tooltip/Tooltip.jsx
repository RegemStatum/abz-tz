import React from "react";
import styles from "./Tooltip.module.scss";

const Tooltip = ({ children, tooltipText }) => {
  return (
    <div data-label={tooltipText} className={styles.tooltipContainer}>
      {children}
    </div>
  );
};

export default Tooltip;
