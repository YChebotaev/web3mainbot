import { type FC } from "react";

import dummyGraphImage from "./rating-list-graph-dummy.svg";

import classes from "./RatingsList.module.css";

export const RatingsList: FC = () => (
  <div className={classes.ratingsListWrapper}>
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
            <span className={classes.footerHighlight}>TOP 5</span> среди Binance
            Chain в SocialFI
          </div>
        </div>
      </div>
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
            <span className={classes.footerHighlight}>TOP 7</span> транзакций
          </div>
        </div>
      </div>
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
            <span className={classes.footerHighlight}>TOP 5</span> среди Binance
            Chain в SocialFI
          </div>
        </div>
      </div>
    </div>
  </div>
);
