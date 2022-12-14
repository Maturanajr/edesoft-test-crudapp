import React, {useState,useEffect} from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store'
import type { userData } from '../Types/User'
import { updateUsers } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import './CreateUser.css'
import userDataFilled from '../Types/User'
import {UserList} from '../redux/userSlice'

export default function UpdateUsers() {
    const users = useSelector((state:RootState) => state.users.user_list)
    const selected_user = useSelector((state:RootState) => state.selectedUser.user_data)
    const [email,setEmail] = useState(selected_user.email);
    const [firstname,setFirstname] = useState(selected_user.name.firstname);
    const [lastname,setLastname] = useState(selected_user.name.lastname);
    const [phone,setPhone] = useState(selected_user.phone);
    const [city,setCity] = useState(selected_user.address?.city);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const attUser = async () =>{
        let UserDict = JSON.parse(JSON.stringify(selected_user));
        UserDict.email = email;
        UserDict.name.firstname = firstname;
        UserDict.name.lastname = lastname;
        UserDict.phone=phone;
        UserDict.address.city=city;
        fetch('https://fakestoreapi.com/users/7',{
                method:"PATCH",
                body:JSON.stringify(UserDict)
            })
                .then(res=>res.json())
                .then(()=>{alert('Usuário atualizado')
        let list_users = JSON.parse(JSON.stringify(users));
        let index = users.indexOf(selected_user);
        list_users[index] = UserDict;
        dispatch(updateUsers(list_users))
        navigate('/')
        })
    }

  return (
    <div className='addUserScreen' >
      <h1>Atualizar usuário</h1>
      <div className='container_user'>
        <div className='inputUser'>
            <p>Email:</p>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" id='input_email' style={{flexGrow:'1'}}/>
        </div>
        <div className='inputUser'>
            <p>Primeiro Nome:</p>
            <input onChange={(e) => setFirstname(e.target.value)} value={firstname} type="text" id='firstname'/>
            <p>Ultimo Nome:</p>
            <input onChange={(e) => setLastname(e.target.value)} value={lastname} type="text" id='lastname'/>
        </div>
        <div className='inputUser'>
            <p>Telefone:</p>
            <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" id='phone'/>
        </div>
        <div className='inputUser'>
            <p>Cidade:</p>
            <input onChange={(e) => setCity(e.target.value)} value={city} type="text" id='city'/>
        </div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <button id='bt_add' onClick={attUser} style={{backgroundColor:'white', borderRadius:'0.3rem', border:'0.1rem solid gray', cursor:'pointer', height:'1.5rem'}}>Atualizar</button>
        </div>
      </div>
    </div>
  )
}
