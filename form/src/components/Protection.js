import { UseAuth } from './Authcontext'
import { Navigate, useLocation } from 'react-router-dom'

export const Protection = ({children}) => {
    const user=UseAuth()
    const loc=useLocation()
    if (!user.logstatus){
        return <Navigate to="/login" state={{path:loc.pathname}}/>
    }
    return children
}