import cn from 'classnames'
import React from 'react'
import { LogoIcon } from '../../../assets'
import { Button } from '../../../components'
import { CARDS } from './constants'
import classes from './Step2.module.css'
import VsImg from './vsImg.png'

type Props = {
  onFinish: () => void
}

export const Step2 = ({ onFinish }: Props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <LogoIcon/>
        <h2 className={classes.title}>Для чего ты здесь?</h2>
      </div>

      <div className={classes.cards}>
        {CARDS.map(it=>{
          return (
            <div key={it.title} className={classes.card}>
              <p className={classes.text}>
                {it.title}
              </p>

              <p className={cn(classes.text, classes.thin)}>
                {it.desc}
              </p>
              <div className={classes.ico}>
                {it.icon}
              </div>
            </div>
          )
        })}
        <img className={classes.vs} src={VsImg} alt="ico"/>
      </div>


      <div className={classes['text-block']}>
        <p className={classes.text}>
          Как стать пользователем ты уже знаешь:
        </p>
        <p className={cn(classes.text, classes.thin)}>
          Скачиваешь приложение для iOS / Android
          Но я хочу рассказать тебе, как стать Бэкером.
        </p>
      </div>


      <div className={classes['text-block']}>
        <p className={classes.text}>
          Что получает Бэкер?
        </p>

        <ol className={classes['num-list']}>
          <li>Актив, растущий вместе с MAIN</li>
          <li>Доступ к закрытому сообществу Бэкеров</li>
          <li>Персональные предложения под ваш актив</li>
        </ol>
      </div>

      <div className={classes['text-block']}>
        <p className={classes.text}>
          Что будет в этом боте?
        </p>
        <ul className={classes.list}>
          <li>Вебинары о влиянии Бэкеров на платформу</li>
          <li>Сторителлинг команды о создании MAIN</li>
          <li>Живые новости о разработке социальной сети</li>
        </ul>
      </div>

      <Button onClick={onFinish} className={classes['bottom-btn']} variant="filled">Всё, понял!</Button>
    </div>
  )
}
