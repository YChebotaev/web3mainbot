import cn from 'classnames'
import React from 'react'
import classes from './Button.module.css'
import { ButtonProps } from './Button.type'

export const Button = ({ variant = 'filled', className, children, ...props }: ButtonProps) => {
  return (
    <button className={cn(className, classes['btn-base'], classes[`btn-${variant}`])} {...props}>
      {children}
    </button>
  )
}
