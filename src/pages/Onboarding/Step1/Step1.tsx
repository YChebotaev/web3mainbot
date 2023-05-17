import cn from 'classnames'
import React, { useMemo } from 'react'
import { LogoIcon, RbkLogoIcon } from '../../../assets'
import { Button } from '../../../components'
import Preview from './rbkPreview.png'
import classes from './Step1.module.css'

type Props = {
  onNext: () => void
}
export const Step1 = ({ onNext }: Props) => {
  const name = useMemo(()=>{
    const Telegram = Reflect.get(window, 'Telegram')

    return Telegram.WebApp.initDataUnsafe?.user?.first_name || 'друг'
  }, [])
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <LogoIcon/>
        <h2 className={classes.title}>Привет, {name}!</h2>
      </div>

      <div className={classes['text-block']}>
        <p className={classes.text}>Сейчас я познакомлю тебя с web 3.0 социальной сетью нового поколения MAIN.</p>
        <p className={cn(classes.text, classes.thin)}>Могу тебе долго описывать этот проект, но будет гораздо проще и
          интереснее посмотреть ролик
          и понять, о чем идёт речь.
        </p>
      </div>

      <div className={classes['video-player']}>

      </div>

      <div className={classes['text-block']}>
        <p className={classes.text}>Как пользователи становятся владельцами социальной сети?</p>
        <p className={cn(classes.text, classes.thin)}>С новыми правилами интернета сами пользователи управляют
          социальной сетью, её контентом, владеют токенами
          социальной сети и растут вместе с ней.
        </p>
      </div>

      <a href="#" className={classes.paper}>
        <RbkLogoIcon/>
        <div className={classes['paper-content']}>
          <img width={58} height={51} src={Preview} alt="ico" className={classes.preview}/>
          <p className={classes.text}>Про MAIN: зарождающийся тренд. Почему за децентрализованными соцсетями будущее.</p>
        </div>
      </a>

      <Button onClick={onNext} variant="filled">Хорошо, идём дальше!</Button>
    </div>
  )
}
