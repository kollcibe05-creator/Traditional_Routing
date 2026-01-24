import React, { useState, useContext} from 'react'
import {format} from "date-fns"
import { AuthContext } from './AuthContext'
import UserCard from './UserCard'



function Home () {
    let {usersLi} = useContext(AuthContext)


    const userList = usersLi.map( user => <UserCard key={user.id} user={user}/>); 
    return (
        <div>
            <h1>Welcome Home!!!</h1>
            <p>{format(new Date(), "hh:mm:ss")}</p>
            {userList}
        </div>
    )
}


export default Home;