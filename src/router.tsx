import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Login'
import CreateAccount from './Pages/CreateAccount/CreateAccount'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='' element={<Login/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<CreateAccount/>}/>
        </Routes>
    </BrowserRouter>
  )
}
