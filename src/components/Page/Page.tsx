import { type CSSProperties, type FC, type ReactNode } from "react";
import cn from "classnames";

import { Logo } from "./Logo";

import classes from "./Page.module.css";

export const Page: FC<{
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}> = ({ className, style, children }) => (
  <div className={cn(classes.page, className)} style={style}>
    <div className={classes.logoWrapper}>
      <Logo />
    </div>
    {children}
  </div>
);
