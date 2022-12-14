export interface userData {
    id?:number,
    email:string,
    username?:string,
    password?:string,
    name:{
        firstname:string,
        lastname:string
        },
    address?:{
    city:string,
    street?:string,
    number?:number,
    zipcode?:string,
    geolocation?:{
        lat:string,
        long:string
        }
    },
    phone?:string
}

const userDataFilled = {
    id:25,
    email:'emailtest@gmail.com',
    username:'test',
    password:'test1234',
    name:{
        firstname:'Usuario',
        lastname:'Teste'
        },
    address:{
    city:'Sorocaba',
    street:'Rua do brasil',
    number:99,
    zipcode:'18077-333',
    geolocation:{
        lat:'1.233.444',
        long:'2.332.532'
        }
    },
    phone:'15-98888-8888'
}
export default userDataFilled