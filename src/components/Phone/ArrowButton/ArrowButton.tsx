import { type FC } from 'react'
import { ArrowRightIcon } from '../../../assets'

import classes from './ArrowButton.module.css'

export const ArrowButton: FC<{ onClick?(): void }> = ({ onClick }) => (
  <button className={classes.arrowButton} onClick={onClick}>
    <ArrowRightIcon/>
  </button>
)
