import cn from 'classnames'
import { type CSSProperties, type FC, type ReactNode } from 'react'

import { Logo } from './Logo'

import classes from './Page.module.css'

export const Page: FC<{
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  logo?: boolean
}> = ({ className, style, children, logo = true }) => (
  <div className={cn(classes.page, className)} style={style}>
    {logo && (
      <div className={classes.logoWrapper}>
        <Logo/>
      </div>
    )}
    {children}
  </div>
)
