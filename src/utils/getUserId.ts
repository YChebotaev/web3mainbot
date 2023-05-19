const { REACT_APP_TELEGRAM_ID='' } = process.env

export const getUserId = (): string => {
  const Telegram = Reflect.get(window, 'Telegram')

  return String(Telegram.WebApp.initDataUnsafe?.user?.id || REACT_APP_TELEGRAM_ID)
}
