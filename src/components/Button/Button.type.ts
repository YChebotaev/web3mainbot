import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { BUTTON_TYPE } from './constants'

export type ButtonTypes = typeof BUTTON_TYPE[keyof typeof BUTTON_TYPE]

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
  {
    variant?: ButtonTypes
    block?: boolean
  }
