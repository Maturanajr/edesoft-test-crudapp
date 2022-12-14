import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store'
import { updateUsers } from '../redux/userSlice'
import { selectUser } from '../redux/selectedUserSlice'
import { useNavigate } from 'react-router-dom';
import './TableUsers.css'


export default function TableUsers() {
    const users = useSelector((state:RootState) => state.users.user_list)
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const updateUser = (userIndex:number) =>{
        dispatch(selectUser(users[userIndex]))
        navigate('/updateuser');
    }

    const deleteUser = (userIndex:number) =>{
        fetch('https://fakestoreapi.com/users/'+users[userIndex].id,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(json=>{
            if (json){alert('Deleted user from fakestoreapi: '+json.email)}else{alert('Deleted recent added user '+users[userIndex].email)};
        let listUsers;
        listUsers = Object.assign([],users);
        listUsers.splice(userIndex,1);
        dispatch(updateUsers(listUsers));
        })
    }
    
    const getUsersFromFakeapi = async () => {
        try{
            fetch('https://fakestoreapi.com/users')
                .then(res=>res.json())
                .then(json=>dispatch(updateUsers(json)))
        }catch{
            alert('Error getting data from fakestoreapi')
            return []
        }
    }

    useEffect(()=>{
    })

    useEffect(() => {
        if (users.length == 0){ 
            getUsersFromFakeapi()
        }
      }, []);

  return (
    <div> 
      <div className="container">
                    <div className="row">
                        <table className="table table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Primeiro Nome</th>
                                    <th scope="col">Ultimo Nome</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Telefone</th>
                                    <th scope="col">Cidade</th>
                                    <th scope="col">#</th>
                                </tr>
                            </thead>
                            <tbody>
                            {users && users.map((user,index) =>
                                    <tr id={index.toString()}>
                                        <td>{user.name?.firstname}</td>
                                        <td>{user.name?.lastname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.address?.city}</td>
                                        <td style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                                            <button onClick={()=> updateUser(index)} className='bt_edit' >Edit</button>
                                            <button onClick={()=> deleteUser(index)} className='bt_delete'>Delete</button>
                                        </td>
                                    </tr>
                                )}
                                
                            </tbody>
                        </table>
                        <div style={{display:'flex', textAlign:'center', justifyContent:'center', backgroundColor:'white', borderRadius:'0.5rem'}}>
                            <button onClick={() => navigate('/adduser')} className='bt_add'>Adicionar usuario</button>
                        </div>

                    </div>
                </div>
    </div>
  )
}
