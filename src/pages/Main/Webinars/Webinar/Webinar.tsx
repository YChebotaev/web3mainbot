import { type FC } from "react";

import classes from "./Webinar.module.css";

export const Webinar: FC<{
  title: string;
  time: string;
  kind: string;
  description: string;
}> = ({ title, time, kind, description }) => (
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
      <button className={classes.button}>Пойти на онлайн-встречу</button>
    </div>
  </div>
);
