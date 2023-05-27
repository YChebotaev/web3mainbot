import cn from 'classnames'
import React, { Fragment, MouseEvent, useState } from 'react'
import { useSendMessageMutation, useSetLeadMutation } from '../../../api'
import { ButtonTypes, MessageButtons } from '../../../api/types'
import { ArrowLeftIcon, ArrowRightIcon } from '../../../assets'
import { Button, Divider, Spin } from '../../../components'
import { LINK } from '../constants'
import { MAIN_BUY_MENU, SUPPORT_MENU } from './constants'
import classes from './SupportBlock.module.css'

type Props = {
  onStartOnboarding: () => void
}
const Telegram = Reflect.get(window, 'Telegram')

export const SupportBlock = ({ onStartOnboarding }: Props) => {
  const [open, setOpen] = useState(false)
  const [isMAIN, setIsMAIN] = useState(false)
  const [setLead, { isLoading }] = useSetLeadMutation()
  const [sendMessage, { isLoading: isSending }] = useSendMessageMutation()

  const handleClickMAIN = (key: string, buttonType: ButtonTypes | null) => {
    if (key === 'question') {
      setLead({ buttonType: 'support' }).unwrap()
        .then(() => window.location.href = LINK.SUPPORT)
        .then(() => Telegram.WebApp.close())
      return
    }
    sendMessage({ messageButton: key as MessageButtons }).unwrap()
      .then(() => buttonType && setLead({ buttonType }).unwrap())
      .then(() => Telegram.WebApp.close())
  }
  const handleBack = () => setIsMAIN(false)
  const handleOpen = () => setOpen(true)
  const handleClickSupport = (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget
    switch (id) {
      case 'buy':
        setIsMAIN(true)
        break
      case 'onboarding':
        onStartOnboarding()
        break
      case 'question':
        setLead().unwrap()
          .then(() => window.location.href = LINK.SUPPORT)
          .then(() => {
            const Telegram = Reflect.get(window, 'Telegram')
            Telegram.WebApp.close()
          })
        break
    }
  }
  return (
    <div className={classes.wrapper}>
      <Button onClick={handleOpen} className={cn(classes.btn, open ? classes.hidden : '')}
              variant="outline">Поддержка</Button>

      <Spin spinning={isSending || isLoading}>
        <div className={cn(classes.paper, !open && classes.hidden)}>
          <div className={classes.header}>
            {isMAIN && (
              <button onClick={handleBack} className={classes['back-btn']}>
                <ArrowLeftIcon/>
              </button>
            )}

            <h3 className={cn(classes.title, classes.center)}>Поддержка</h3>
            <p className={cn(classes.text, classes.desc, isMAIN ? classes.primary : '')}>
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
                <button onClick={handleClickSupport} id={it.key} className={cn(classes.title, classes['menu-item'])}>
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
                <button onClick={() => handleClickMAIN(it.key, it.type)} id={it.key}
                        className={cn(classes.title, classes['menu-item'])}>
                  {it.title}
                  <ArrowRightIcon/>
                </button>
              </Fragment>
            )
          })}
        </div>
      </Spin>
    </div>
  )
}
