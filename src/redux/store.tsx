import usersReducer from './userSlice'
import selectedUserReducer from './selectedUserSlice'
import { configureStore } from '@reduxjs/toolkit'
// ...

export const store = configureStore({
    reducer:{
        users:usersReducer,
        selectedUser:selectedUserReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
