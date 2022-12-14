import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TableUsers from './Components/TableUsers'
import CreateUser from './Components/CreateUser'
import UpdateUsers from './Components/UpdateUser'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='' element={<TableUsers/>}/>
            <Route path='/adduser' element={<CreateUser/>}/>
            <Route path='/updateuser' element={<UpdateUsers/>}/>
        </Routes>
    </BrowserRouter>
  )
}
