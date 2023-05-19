import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useSetUserInfoMutation } from '../../api'

import { ArrowButton } from './ArrowButton'

import classes from './Phone.module.css'

type Props = {
  onSubmit: (phone: string) => void;
}
export const Phone = ({ onSubmit }: Props) => {
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
            enableAreaCodes
            country="ru"
            value={value}
            onChange={handleChange}
            containerClass={classes.container}
            inputClass={classes.input}
            buttonClass={classes.button}
            dropdownClass={classes.dropdown}
            searchClass={classes.search}
          />
        </div>

        <div className={classes.right}>
          <ArrowButton onClick={handleSubmit}/>
        </div>
      </div>

      {Boolean(error) && <div className={classes.errorText}>{error}</div>}
    </div>
  )
}
