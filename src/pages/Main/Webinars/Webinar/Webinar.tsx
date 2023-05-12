import { type FC } from "react";

import classes from "./Webinar.module.css";

export const Webinar: FC<{
  title: string;
  time: string;
  kind: string;
  description: string;
  onClickButton?(): void;
}> = ({ title, time, kind, description, onClickButton }) => (
  <div className={classes.webinar}>
    <div className={classes.title}>{title}</div>
    <div className={classes.block1}>
      <div className={classes.block1Left}>
        <div className={classes.time}>{time}</div>
      </div>
      <div className={classes.block1Right}>
        <div className={classes.kind}>{kind}</div>
      </div>
    </div>
    <div className={classes.block2}>
      <div className={classes.block2Title}>О событии</div>
      <div className={classes.description}>{description}</div>
    </div>
    <div className={classes.block3}>
      <button className={classes.button} onClick={onClickButton}>
        Пойти на онлайн-встречу
      </button>
    </div>
  </div>
);
