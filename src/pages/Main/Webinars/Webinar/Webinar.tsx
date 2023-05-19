import { type FC } from 'react'
import { DATE_TIME } from '../../../../utils/dateFormat'

import classes from './Webinar.module.css'


export const Webinar: FC<{
  title: string;
  time: string;
  kind: string;
  description: string;
  onClickButton?(): void;
  isSubscribed?: boolean
}> = ({ title, time, kind, description, onClickButton, isSubscribed }) => (
  <div className={classes.webinar}>
    <div className={classes.title}>{title}</div>
    <div className={classes.block1}>
      <div className={classes.block1Left}>
        <div className={classes.time}>{DATE_TIME.FORMAT(time, 'DD MMM YYYY в hh:mm')}</div>
      </div>
      <div className={classes.block1Right}>
        <div className={classes.kind}>{kind}</div>
      </div>
    </div>
    <div className={classes.block2}>
      <div className={classes.block2Title}>О событии</div>
      <div className={classes.description}>{description}</div>
    </div>
    <div className={classes.block3}>
      <button disabled={isSubscribed} className={classes.button} onClick={onClickButton}>
        {isSubscribed ? 'Вы зарегистрировались на мероприятие' : 'Пойти на онлайн-встречу'}
      </button>
    </div>
  </div>
)
