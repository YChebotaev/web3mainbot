import { createApi, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import { getUserId } from '../utils'
import { baseQuery } from './config'
import { MessageButtons, User, Webinar, WebinarSchema } from './types'
import { normalizeWebinar } from './utils'

const id = getUserId()

export const appQuery = createApi({
    baseQuery,
    reducerPath: 'authQuery',
    tagTypes: [],
    endpoints: (build) => ({
      getUserById: build.query<User, { id: string, }>({
        query: ({ id }) => ({
          url: `/user_info?user_id=${id}/`,
        }),
        transformResponse: (data: { phone: string, onboarding_complete: boolean }) => {
          return { phone: data.phone, onboardingComplete: data.onboarding_complete }
        },
      }),

      setUserInfo: build.mutation<User, Partial<User>>({
        query: ({ phone, onboardingComplete }) => ({
          url: `/user_info/`,
          method: 'POST',
          body: (() => {
            const body = { user_id: id } as { user_id: string, phone: string, onboarding_complete: boolean }
            phone && (body.phone = phone)
            onboardingComplete && (body.onboarding_complete = onboardingComplete)
            return body
          })(),
        }),
        transformResponse: (data: { phone: string, onboarding_complete: boolean, user_id: string }) => {
          return { phone: data.phone, onboardingComplete: data.onboarding_complete }
        },
        onQueryStarted: ({ phone, onboardingComplete }, { dispatch, queryFulfilled }) => {
          const updated = dispatch(appQuery.util.updateQueryData(
            'getUserById', { id },
            (cache) => {
              const updatedCache = { ...cache }
              phone && (updatedCache.phone = phone)
              onboardingComplete && (updatedCache.onboardingComplete = onboardingComplete)

              return updatedCache
            },
          ))
          queryFulfilled.catch(updated.undo)
        },
      }),

      getWebinar: build.query<Webinar, void>({
        queryFn: async (_, _queryApi, _extraOptions, baseQuery) => {
          const { error, data } = await baseQuery({
            url: `/get_webinar/`,
          }) as { data?: WebinarSchema, error?: FetchBaseQueryError }

          if (data) {
            const { data: dataS } = await baseQuery({
              url: `/webinar?user_id=${id}/`,
            }) as { data?: { is_subscribed: string }, error?: FetchBaseQueryError }

            return { data: normalizeWebinar(data, !!(dataS?.is_subscribed)) }

          }

          return { error: error as FetchBaseQueryError }
        },
      }),

      subscribeToWebinar: build.mutation<{ isSubscribed: boolean }, void>({
        query: () => ({
          url: `/webinar/`,
          method: 'POST',
          body: { user_id: id, is_subscribed: true },
        }),
        transformResponse: (data: { is_subscribed: boolean }) => ({ isSubscribed: data.is_subscribed }),
        onQueryStarted: (_, { dispatch, queryFulfilled }) => {
          queryFulfilled.then(() => dispatch(appQuery.util.updateQueryData(
            'getWebinar', undefined,
            (cache) => ({ ...cache, isSubscribed: true }),
          ))).catch()
        },
      }),

      setLead: build.mutation<{ id: string, phone: string }, void>({
        query: () => ({
          url: `/lead/`,
          method: 'POST',
          body: { user_id: id },
        }),
      }),

      sendMessage: build.mutation<string, { messageButton: MessageButtons }>({
        query: ({ messageButton }) => ({
          url: `/send_msg?user_id=${id}&msg_btn=${messageButton}/`,
          method: 'GET',
        }),
      }),

    }),
  },
)
export const {
  useGetUserByIdQuery,
  useSetUserInfoMutation,
  useGetWebinarQuery,
  useLazyGetUserByIdQuery,
  useLazyGetWebinarQuery,
  useSetLeadMutation,
  useSubscribeToWebinarMutation,
  useSendMessageMutation
} = appQuery
