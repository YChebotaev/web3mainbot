import cn from 'classnames'
import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useSetUserInfoMutation } from '../../api'
import { ArrowRightIcon, SpinIcon } from '../../assets'
import { Button } from '../Button'

import classes from './Phone.module.css'

type Props = {
  onSubmit: (phone: string) => void;
  isLoading?: boolean
}
export const Phone = ({ onSubmit, isLoading }: Props) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [setUserPhone] = useSetUserInfoMutation()

  const handleChange = (phone: string) => {
    setError('')
    setValue(phone)
  }

  const handleSubmit = async () => {
    if (!value) {
      setError('Введите номер телефона')
      return
    }
    setUserPhone({ phone: value }).unwrap()
      .then(() => onSubmit(value))
      .then(() => setValue(''))
      .then(() => {
        const Telegram = Reflect.get(window, 'Telegram')
        Telegram.WebApp.close()
      })
  }

  return (
    <div>
      <div className={classes.phone}>
        <div className={classes.left}>
          <PhoneInput
            disabled={isLoading}
            enableAreaCodes
            country="ru"
            value={value}
            onChange={handleChange}
            containerClass={cn(classes.container, isLoading && classes.disabled)}
            inputClass={classes.input}
            buttonClass={classes.button}
            dropdownClass={classes.dropdown}
            searchClass={classes.search}
          />
        </div>

        <div className={classes.right}>
          {isLoading
            ? <SpinIcon className={classes.spin}/>
            : (
              <Button variant="text" onClick={handleSubmit}>
                <ArrowRightIcon/>
              </Button>
            )}
        </div>
      </div>

      {Boolean(error) && <div className={classes.errorText}>{error}</div>}
    </div>
  )
}
