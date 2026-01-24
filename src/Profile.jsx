import React, {useContext} from 'react'
import { useParams} from "react-router-dom"
import { AuthContext } from './AuthContext'


function Profile () {
    const {id} = useParams()
    const {usersLi} = useContext(AuthContext)
    const user = usersLi.find(user => user.id === Number(id))
    if (!user){
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>{user.name}</h1> 
            <p>{user.allowedRoles}</p>
        </div>
    )
}
export default Profile