import { BUTTON_TYPE, MESSAGE_BUTTON } from '../../../api/constants'

export const SUPPORT_MENU = [
  {
    title: 'Способы купить MAIN',
    link: null,
    key: 'buy',
  },
  {
    title: 'Задать вопрос специалисту',
    link: '#',
    key: 'question',
  },
  {
    title: 'Для чего этот бот?',
    link: null,
    key: 'onboarding',
  },
]

export const MAIN_BUY_MENU = [
  {
    title: 'Купить MAIN через обменник NUMMA',
    key: MESSAGE_BUTTON.NUMMA_FROM,
    type: null
  },
  {
    title: 'Купить за криптовалюту',
    key: MESSAGE_BUTTON.CRYPTO_FROM,
    type: BUTTON_TYPE.MAIN
  },
  {
    title: 'За рубли с карты через Binance',
    key: MESSAGE_BUTTON.BINANCE_FROM,
    type: BUTTON_TYPE.MAIN
  },
  {
    title: 'Стейкинг MAIN под 30% APY',
    key: MESSAGE_BUTTON.STAKING,
    type: BUTTON_TYPE.STAKING
  },
  {
    title: 'Продать MAIN',
    key: MESSAGE_BUTTON.SELL,
    type: null
  },
  {
    title: 'Задать вопрос специалисту',
    key: 'question',
    type: BUTTON_TYPE.SUPPORT
  },
]
