import { useContext, createContext, useState } from 'react'
const AuthContext=createContext()
export const AuthProvider = ({children}) => {
    const [logstatus, setLogStatus]=useState(false)
    const Login = (uid,pass,callback) => {

    let flag=false
    if (uid==='Sanath' && pass==='123@vpt'){
        flag=true
    }
    else{
        flag=false
    }
    setLogStatus(flag)
    callback(flag)
}
const Logout = (callback) => {
    let logout=false
    setLogStatus(logout)
    callback(logout)
}
return (
<AuthContext.Provider value={{logstatus, Login, Logout}}>
    {children}
    </AuthContext.Provider>
    )
}
export const UseAuth = () => {
    return useContext(AuthContext)
}