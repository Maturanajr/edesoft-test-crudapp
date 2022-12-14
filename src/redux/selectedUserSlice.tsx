import {createSlice} from '@reduxjs/toolkit'
import { userData } from '../Types/User'
import type { RootState, AppDispatch } from './store'

interface selectedUserData{
    user_data:userData
}
  // Define the initial state using that type
  const initialState: selectedUserData = {
    user_data:{email:'',name:{firstname:'',lastname:''}}
  }

export const sliceSelectedUser = createSlice({
    name: 'selectedUser',
    initialState: initialState,
    reducers:{
      selectUser(state,{payload}){
            return {...state, user_data:payload}
        }
    }
})

export const {selectUser} = sliceSelectedUser.actions

export default sliceSelectedUser.reducer
