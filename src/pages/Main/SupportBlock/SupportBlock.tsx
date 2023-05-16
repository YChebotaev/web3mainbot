import cn from 'classnames'
import React, { Fragment, MouseEvent, useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '../../../assets'
import { Button, Divider } from '../../../components'
import { MAIN_BUY_MENU, SUPPORT_MENU } from './constants'
import classes from './SupportBlock.module.css'

export const SupportBlock = () => {
  const [open, setOpen] = useState(false)
  const [isMAIN, setIsMAIN] = useState(false)

  const handleNavigate = (link: string) => window.location.href = link
  const handleBack = () => setIsMAIN(false)
  const handleOpen = () => setOpen(true)
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget
    switch (id) {
      case 'buy':
        setIsMAIN(true)
        break
      case 'onboarding':
        break
      case 'question':
        window.location.href = '#'
        break
    }
  }
  return (
    <div className={classes.wrapper}>
      <Button onClick={handleOpen} className={cn(classes.btn, open ? classes.hidden : '')}
              variant="outline">Поддержка</Button>

      <div className={cn(classes.paper, !open && classes.hidden)}>
        <div className={classes.header}>
          {isMAIN && (
            <button onClick={handleBack} className={classes['back-btn']}>
              <ArrowLeftIcon/>
            </button>
          )}

          <h3 className={cn(classes.title, classes.center)}>Поддержка</h3>
          <p className={cn(classes.text, isMAIN ? classes.primary : '')}>
            {isMAIN
              ? 'Способы купить MAIN'
              : 'Выберите, что вас интересует:'
            }
          </p>
        </div>

        {!isMAIN && SUPPORT_MENU.map(it => {
          return (
            <Fragment key={it.key}>
              <Divider/>
              <button onClick={handleClick} id={it.key} className={cn(classes.title, classes['menu-item'])}>
                {it.title}
                <ArrowRightIcon/>
              </button>
            </Fragment>
          )
        })}

        {isMAIN && MAIN_BUY_MENU.map(it => {
          return (
            <Fragment key={it.key}>
              <Divider/>
              <button onClick={() => handleNavigate(it.link)} id={it.key}
                      className={cn(classes.title, classes['menu-item'])}>
                {it.title}
                <ArrowRightIcon/>
              </button>
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}
