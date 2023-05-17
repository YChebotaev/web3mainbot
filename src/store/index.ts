import { configureStore } from '@reduxjs/toolkit'
import { appQuery } from '../api'

export default configureStore({
  reducer: { [appQuery.reducerPath]: appQuery.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(appQuery.middleware),
})
