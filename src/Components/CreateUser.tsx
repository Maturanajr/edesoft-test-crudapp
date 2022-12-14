import React, {useState} from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store'
import type { userData } from '../Types/User'
import { updateUsers } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import './CreateUser.css'
import userDataFilled from '../Types/User'

export default function CreateUser() {
    const users = useSelector((state:RootState) => state.users.user_list)
    const [email,setEmail] = useState('');
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [phone,setPhone] = useState('');
    const [city,setCity] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const addUser = async () =>{
        let UserDict = JSON.parse(JSON.stringify(userDataFilled));
        UserDict.email = email;
        UserDict.name.firstname = firstname;
        UserDict.name.lastname = lastname;
        UserDict.phone=phone;
        UserDict.address.city=city;
        fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(UserDict)
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

        let listUsers;
        listUsers = JSON.parse(JSON.stringify(users))
        listUsers.push(UserDict)
        dispatch(updateUsers(listUsers))
        navigate('/')
    }


  return (
    <div className='addUserScreen' >
      <h1>Adicionar usuário</h1>
      <div className='container_user'>
        <div className='inputUser'>
            <p>Email:</p>
            <input onChange={(e) => setEmail(e.target.value)} type="text" id='input_email' style={{flexGrow:'1'}}/>
        </div>
        <div className='inputUser'>
            <p>Primeiro Nome:</p>
            <input onChange={(e) => setFirstname(e.target.value)} type="text" id='firstname'/>
            <p>Ultimo Nome:</p>
            <input onChange={(e) => setLastname(e.target.value)} type="text" id='lastname'/>
        </div>
        <div className='inputUser'>
            <p>Telefone:</p>
            <input onChange={(e) => setPhone(e.target.value)} type="text" id='phone'/>
        </div>
        <div className='inputUser'>
            <p>Cidade:</p>
            <input onChange={(e) => setCity(e.target.value)} type="text" id='city'/>
        </div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <button id='bt_add' onClick={addUser} style={{backgroundColor:'white', borderRadius:'0.3rem', border:'0.1rem solid gray', cursor:'pointer', height:'1.5rem'}}>Adicionar</button>
        </div>
      </div>
    </div>
  )
}
