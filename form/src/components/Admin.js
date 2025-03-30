import { UseAuth } from './Authcontext'
import { useUserContext } from './Usercontext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Admin.css'
const Admin = () => {
const nav=useNavigate()
const auth=UseAuth()
const usercontext=useUserContext()
const users=usercontext.userlist||[]
const n=users.length>0?users[0].Name:"NO USERS"
const [ name, setName ] = useState(n)
const handleLogout = () => {
    auth.Logout((logout)=> {
        if(!logout){
            alert("Logged Out Successfully")
            nav('/',{replace:true})
        }
        else{
            alert("There was some problem. Couldn't Logout.")
        }
    })
}
const handleName = (e) => {
    setName(e.target.value)
}
const handleDelete = (n) => {
    usercontext.Deluser(n);
    alert(`${n} deleted successfully.`)
}
return(
<div>
    <h1 align="center">Welcome Admin</h1>
    <div class="delcontainer">
        <div>
            <label className="namebx" htmlFor="delname">Branch:</label>
            <select className="namebx" id="delname" onChange={handleName} value={name}>
                {users.length>0?users.map((u)=><option key={u.Name}>{u.Name}</option>)
                :<option>NO USERS</option>}
                </select>
                <button className="logout1" onClick={()=>{handleDelete(name)}}>DELETE</button>
                </div>
                <button className="logout" onClick={handleLogout}>LOGOUT</button>
                </div>
        </div>
);
}
export default Admin