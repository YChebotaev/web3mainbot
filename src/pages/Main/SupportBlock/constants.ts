import { MESSAGE_BUTTON } from '../../../api/constants'

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
    link: '#',
    key: MESSAGE_BUTTON.NUMMA_FROM,
  },
  {
    title: 'Купить за криптовалюту',
    link: '#',
    key: MESSAGE_BUTTON.CRYPTO_FROM,
  },
  {
    title: 'За рубли с карты через Binance',
    link: '#',
    key: MESSAGE_BUTTON.BINANCE_FROM,
  },
  {
    title: 'Стейкинг MAIN под 30% APY',
    link: '#',
    key: MESSAGE_BUTTON.STAKING,
  },
  {
    title: 'Продать MAIN',
    link: '#',
    key: MESSAGE_BUTTON.SELL,
  },
  {
    title: 'Задать вопрос специалисту',
    link: '#',
    key: 'question',
  },
]
