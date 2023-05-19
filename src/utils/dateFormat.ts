// Это обязательно должно быть тут где используется dayjs
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import 'dayjs/locale/ru';

dayjs.extend(utc)
dayjs.locale('ru');
export const DATE_TIME = {
  FORMAT: (dateTime?: string | null, format: string = 'DD.MM.YYYY'): string => dayjs(dateTime).format(format),
}
