import cn from 'classnames'
import React, { type CSSProperties, useState } from 'react'
import { Phone } from '../../../components/Phone'
import { SupportBlock } from '../SupportBlock'
import coinImage from './coin.svg'

import classes from './Hero.module.css'
import mainImage from './main-mini-logo.png'
import pancakeswapImage from './pancakeswap-logo.svg'
import walletImage from './wallet.png'

type Props = {
  onStartOnboarding: () => void
  className?: string
  style?: CSSProperties
  phone: string | undefined
}
export const Hero = ({ onStartOnboarding, className, style, phone }: Props) => {
  const [showPhone, setShowPhone] = useState(false)

  const handlePayByPancakeSwap = () => {
    setShowPhone(false);
    window.location.href = 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x8a6f3bf52a26a21531514e23016eeae8ba7e7018'
  }

  const handleClick = () => {
    if (!phone) {
      setShowPhone(true)
      return
    }
    handlePayByPancakeSwap()
  }

  return (
    <div className={cn(classes.hero, className)} style={style}>
      <div className={classes.title}>
        Покупка токена MAIN
        <img
          className={classes.titleLogo}
          src={mainImage}
          alt=""
          role="presentation"
        />
      </div>
      <div className={classes.block1}>
        <div className={classes.number}>75.000.000</div>
        <div className={classes.text} style={{ width: '80%' }}>
          токенов MAIN готовы к продаже в сервисе обмена Numma
        </div>
      </div>
      <div className={classes.block2}>
        <button
          className={classes.button}
          onClick={() => {
            window.location.href = 'https://t.me/nummatexbot'
          }}
        >
          <div className={classes.buttonText}>Купить токен за рубли</div>
          <img
            className={classes.buttonIcon}
            src={coinImage}
            alt=""
            role="presentation"
            style={{
              width: '72.48px',
              top: '-40px',
              right: '-3px',
            }}
          />
        </button>
      </div>
      <div className={classes.block3}>
        <div className={classes.text} style={{ width: '80%' }}>
          Купить токены за другие криптовалюты на бирже PancakeSwap
        </div>
      </div>
      <div className={classes.block4}>
        <button className={classes.button} onClick={handleClick}>
          <div className={classes.buttonText}>Купить через PancakeSwap</div>
          <img
            className={classes.buttonIcon}
            src={pancakeswapImage}
            alt=""
            role="presentation"
            style={{
              width: '58.48px',
              top: '-46px',
              right: '3px',
            }}
          />
        </button>

      </div>
      {showPhone && (
        <div className={classes.block5}>
          <div className={classes.phoneLabel}>Введите ваш номер телефона:</div>
          <Phone onSubmit={handlePayByPancakeSwap}/>
        </div>
      )}

      <SupportBlock onStartOnboarding={onStartOnboarding}/>
      <img
        className={classes.wallet}
        src={walletImage}
        alt=""
        role="presentation"
      />
    </div>
  )
}
