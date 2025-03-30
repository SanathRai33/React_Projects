import { UseAuth } from './Authcontext'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './Login.css'
const Login =() => {
const [admin,setAdmin]=useState('')
const [passwd,setPasswd]=useState('')
const auth=UseAuth()
const nav=useNavigate()
const loc=useLocation()
const handleName = (e) => {
    setAdmin(e.target.value)
}
const handlePasswd = (e) => {
    setPasswd(e.target.value)
}
const handleLogin = () => {
    auth.Login(admin,passwd,(flag)=>{
        const redirection=loc.state?loc.state.path:'/'
        if (flag){
            alert("Login Successful")
            nav(redirection, {replace:true})
        }
        else{
            alert("Admin Credentials Mismatch")
        }
    })
}
return(
<div className="logcontainer">
    <div>
        <label className="login1" htmlFor='name'>Admin Name:</label>
        <input type="text" id="name" className="login" value={admin} onChange={handleName}/>
    </div>
    <div>
        <label className="login1" htmlFor='pass'>Password:</label>
        <input type="password" id="pass" className="login" value={passwd}
        onChange={handlePasswd}/>
    </div>
    <button className="login" onClick={handleLogin}>LOGIN</button>
</div>
)
}
export default Login