import { configureStore } from '@reduxjs/toolkit'

// import authSlice from '@shared/application/slice/auth'
// import analyticSlice from '@domains/analytics/application/slices/analyticSlice'

const store = configureStore({
	reducer: {},
	devTools: import.meta.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
