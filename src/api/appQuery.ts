import { createApi } from '@reduxjs/toolkit/query/react'
import { getUserId } from '../utils'
import { baseQuery } from './config'
import { WebinarSchema } from './types'

const id = getUserId()

export const appQuery = createApi({
    baseQuery,
    reducerPath: 'authQuery',
    tagTypes: [],
    endpoints: (build) => ({
      getUserById: build.query<{ id: string, phone: string, isOnboardingPassed: boolean }, { id: string, }>({
        query: ({ id }) => ({
          url: `/phone?user_id=${id}/`,
        }),
      }),

      setUserPhone: build.mutation<{ id: string, phone: string }, { phone: string }>({
        query: ({ phone }) => ({
          url: `/phone?user_id=${id}/`,
          method: 'POST',
          body: { user_id: id, phone },
        }),
        onQueryStarted: ({ phone }, { dispatch, queryFulfilled }) => {
          const updated = dispatch(appQuery.util.updateQueryData(
            'getUserById', { id },
            (cache) => ({ ...cache, phone }),
          ))
          queryFulfilled.catch(updated.undo)
        },
      }),

      setUserOnboarding: build.mutation<{ id: string, phone: string }, { phone: string }>({
        query: ({  phone }) => ({
          url: `/phone?user_id=${id}/`,
          method: 'POST',
          body: { user_id: id, phone },
        }),
        onQueryStarted: ({  phone }, { dispatch, queryFulfilled }) => {
          const updated = dispatch(appQuery.util.updateQueryData(
            'getUserById', { id },
            (cache) => ({ ...cache, phone }),
          ))
          queryFulfilled.catch(updated.undo)
        },
      }),

      getWebinar: build.query<WebinarSchema, void>({
        query: () => ({ url: `/get_webinar/` }),
      }),

      setLead: build.mutation<{ id: string, phone: string }, void>({
        query: () => ({
          url: `/lead/`,
          method: 'POST',
          body: { user_id: id },
        }),
      }),

    }),
  },
)
export const {
  useGetUserByIdQuery,
  useSetUserPhoneMutation,
  useSetUserOnboardingMutation,
  useGetWebinarQuery,
  useLazyGetUserByIdQuery,
  useLazyGetWebinarQuery,
  useSetLeadMutation,
} = appQuery
