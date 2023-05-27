import cn from 'classnames'
import React, { ReactNode } from 'react'
import { SpinIcon } from '../../assets'
import classes from './Spin.module.css'

type Props = {
  children: ReactNode
  spinning: boolean
}

export const Spin = ({ children, spinning }: Props) => {
  return (
    <div className={classes.wrapper}>
      {children}

      <div className={cn(spinning ? classes.background : classes.hidden)}>
        <div className={classes['spin_wrapper']}>
        <SpinIcon className={classes.spin}/>
        </div>
      </div>
    </div>
  )
}

