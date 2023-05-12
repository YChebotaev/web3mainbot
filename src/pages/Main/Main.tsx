import { Suspense, type FC } from "react";
import cn from "classnames";

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
    <div className={cn(classes.block, classes.mediaWrapper)}>
      <div className={cn(classes.blockHeader, classes.mediaHeader)}>
        О MAIN пишут
      </div>
      <MediaList className={classes.mediaList} />
    </div>
    <div className={cn(classes.block, classes.ratingsWrapper)}>
      <div className={cn(classes.blockHeader, classes.ratingsHeader)}>
        Крипто рейтинги
      </div>
      <RatingsList className={classes.ratingsList} />
    </div>
    <div className={cn(classes.block, classes.faqWrapper)}>
      <div className={classes.blockHeader}>FAQ</div>
      <FAQ />
    </div>
  </Page>
);
