import { type FC } from "react";
import cn from "classnames";

import dummyGraphImage from "./rating-list-graph-dummy.svg";

import classes from "./RatingsList.module.css";

export const RatingsList: FC<{ className: string }> = ({ className }) => (
  <div className={cn(classes.ratingsListWrapper, className)}>
    <div className={classes.ratingsList}>
      <div className={classes.item}>
        <div className={classes.itemIconWrapper}>
          <div className={classes.itemIcon} />
        </div>
        <div className={classes.itemBody}>
          <div className={classes.bodyIconWrapper}>
            <div className={classes.bodyIcon} />
          </div>
          <div className={classes.bodyMainWrapper}>
            <div className={classes.itemName}>MAIN</div>
            <div className={classes.itemVendor}>BNB Chain</div>
          </div>
          <div className={classes.bodyGraphWrapper}>
            <div className={classes.itemGraph}>
              <img src={dummyGraphImage} alt="" width="89" height="27.5" />
            </div>
          </div>
        </div>
        <div className={classes.itemFooter}>
          <div className={classes.footerText}>
            <span className={classes.footerHighlight}>#6</span> среди Binance
            Chain в SocialFI
          </div>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.itemIconWrapper}>
          <div className={classes.itemIcon2} />
        </div>
        <div className={classes.itemBody}>
          <div className={classes.bodyIconWrapper}>
            <div className={classes.bodyIcon} />
          </div>
          <div className={classes.bodyMainWrapper}>
            <div className={classes.itemName}>MAIN</div>
            <div className={classes.itemVendor}>BNB Chain</div>
          </div>
          <div className={classes.bodyGraphWrapper}>
            <div className={classes.itemGraph}>
              <img src={dummyGraphImage} alt="" width="89" height="27.5" />
            </div>
          </div>
        </div>
        <div className={classes.itemFooter}>
          <div className={classes.footerText}>
            <span className={classes.footerHighlight}>#11</span> среди Binance
            Chain в SocialFI
          </div>
        </div>
      </div>
    </div>
  </div>
);
