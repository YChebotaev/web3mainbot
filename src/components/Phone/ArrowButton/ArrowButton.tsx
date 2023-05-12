import { type FC } from "react";

import classes from "./ArrowButton.module.css";
import arrowImage from "./arrow.svg";

export const ArrowButton: FC<{ onClick?(): void }> = ({ onClick }) => (
  <button className={classes.arrowButton} onClick={onClick}>
    <img className={classes.icon} src={arrowImage} alt="" />
  </button>
);
