import React,{useState} from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Home from './Home';
function Loging() {

const adminUser={

  email:"sathish@gmail",
password:"sathish"
}
 const[user,setUser]=useState({name:"",email:""});
 const [error,setError]=useState("")

 const Login=details=>{
console.log(details)

if(details.email==adminUser.email&&details.password==adminUser.password){
console.log("logedin")
setUser({
  name:details.name,
  email:details.email
})

 }else{
  console.log("failed");
  setError("please enter the vlid data")
 }
}

 const Logout=()=>{
  console.log("Logout")
  setUser({name:"",email:""})
   }

  return (
    <div >
     {(user.email !=="")?(
       <div>
       
       <h2>welcome,<span>{user.name}</span></h2>
<Home/>
       <button onClick={Logout}>logout</button>
       </div>
     ):(
<LoginForm Login={Login} error={error}/>
     )}
    </div>
  );
}

export default Loging;
