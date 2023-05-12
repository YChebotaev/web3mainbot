export const getUserId = (): number | undefined => {
  const Telegram = Reflect.get(window, 'Telegram')

  return Telegram.WebApp.initDataUnsafe?.user?.id
}
