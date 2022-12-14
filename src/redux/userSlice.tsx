import {createSlice} from '@reduxjs/toolkit'
import { userData } from '../Types/User'
import type { RootState, AppDispatch } from './store'

export interface UserList{
    user_list:userData[]
}
  // Define the initial state using that type
  const initialState: UserList = {
    user_list:[]
  }

export const slice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers:{
        updateUsers(state,{payload}){
            return {...state, user_list:payload}
        },
    }
})

export const {updateUsers} = slice.actions
export const getUsers = (state:RootState) => state

export default slice.reducer
