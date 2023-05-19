export type WebinarSchema = {
  'title': string,
  'day_bf_description': null | string,
  'hour_bf_description': null | string,
  'minute_bf_description': null | string,

  'day_bf_content': null | string,
  'hour_bf_content': null | string,
  'minute_bf_content': null | string,

  'webinar_started_date': string,

  'day_bf_calendar_link': null | string,
  'hour_bf_calendar_link': null | string,
  'minute_bf_calendar_link': null | string,

  'minute_bf_webinar_link': null | string,
  'day_bf_webinar_link': null | string,
  'hour_bf_webinar_link': null | string,
}

export type User = {
  phone: string,
  onboardingComplete: boolean
}

export type Webinar = {
  title: string,
  description: string,
  date: string
  content: string
  webinarLink: string
  isSubscribed: boolean
}
