import cn from 'classnames'
import { type CSSProperties, useState } from 'react'
import { useGetWebinarQuery } from '../../../api'
import { Phone } from '../../../components/Phone'

import { Webinar } from './Webinar'

import classes from './Webinars.module.css'

type Props = {
  className?: string;
  style?: CSSProperties,
  phone: string | undefined
}
export const Webinars = ({ className, style, phone }: Props) => {
  const { data: webinar } = useGetWebinarQuery()

  const [showPhone, setShowPhone] = useState(false)

  const handleSubmit = () => {
    setShowPhone(false)
  }
  const handleClick = () => {
    if (!phone) {
      setShowPhone(true)
      return
    }
    handleSubmit()
  }
  if (webinar) {
    return (
      <div className={cn(classes.webinars, className)} style={style}>
        <div className={classes.title}>Мероприятия</div>
        <div className={classes.list}>
          <Webinar
            title={webinar.title}
            time={webinar.webinar_started_date}
            kind="Онлайн-встреча инвесторов"
            description={webinar.day_bf_description || ''}
            onClickButton={handleClick}
          />
        </div>


        {showPhone && (
          <div className={classes.block2}>
            <div className={classes.phoneLabel}>Введите ваш номер телефона:</div>
            <Phone onSubmit={handleSubmit}/>
          </div>
        )}
      </div>
    )
  }
  return null
}
