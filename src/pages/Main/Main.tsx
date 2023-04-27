import { type FC } from "react";

import { Page } from "../../components/Page";
import { Hero } from "./Hero";
import { Webinars } from "./Webinars";
import { Samopiar } from "./Samopiar";
import { MediaList } from "./MediaList";
import { RatingsList } from "./RatingsList";
import { FAQ } from "./FAQ";

import classes from "./Main.module.css";

export const Main: FC = () => (
  <Page>
    <div className={classes.heroWrapper}>
      <Hero />
    </div>
    <div className={classes.webinarsWrapper}>
      <Webinars />
    </div>
    <div className={classes.separator} />
    <div className={classes.block}>
      <div className={classes.blockHeader}>О токене MAIN</div>
      <Samopiar />
    </div>
    <div className={classes.block}>
      <div className={classes.blockHeader}>О MAIN пишут</div>
      <MediaList />
    </div>
    <div className={classes.block}>
      <div className={classes.blockHeader}>Крипто рейтинги</div>
      <RatingsList />
    </div>
    <div className={classes.block}>
      <div className={classes.blockHeader}>FAQ</div>
      <FAQ />
    </div>
  </Page>
);
