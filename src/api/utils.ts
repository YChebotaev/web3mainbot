import { Webinar, WebinarSchema } from './types'
type Intervals = 'hour' | 'day' | 'minute'
export const normalizeWebinar = (data: WebinarSchema, isSubscribed: boolean): Webinar => {

  return {
    isSubscribed,
    title: data.title,
    date: data.webinar_started_date,
    description: data.day_bf_description || '',
    content: data.day_bf_content || '',
    webinarLink: data.day_bf_webinar_link || '',
  }
}
