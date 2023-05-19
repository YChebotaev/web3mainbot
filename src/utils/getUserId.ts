export const getUserId = (): string => {
  const Telegram = Reflect.get(window, 'Telegram')

  return String(Telegram.WebApp.initDataUnsafe?.user?.id || '')
}
