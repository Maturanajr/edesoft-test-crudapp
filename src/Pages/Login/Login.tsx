import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div style={{border: '1px solid lightskyblue', borderRadius: '1rem', padding: '2rem', textAlign:'center'}}>
      <p className='labelLogin'>Login panel</p>
      <div className='login_panel'>
        <div>
          <p className='inputLabel'>Email</p>
          <input type="text" id='email' className='inputs'/>
        </div>
        <div>
          <p className='inputLabel'>Senha</p>
          <input type="password" id='password' className='inputs'/>
        </div>
      </div>
      <div className='bt_login_div'>
        <button id='bt_login'>Login</button>
      </div>
      <a href="/register" style={{fontSize:'0.8rem'}}>Create an account</a>
    </div>
  )
}
