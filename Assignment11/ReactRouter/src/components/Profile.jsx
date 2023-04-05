import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
    const {id} = useParams()

    return (
        <div>
            <h1 style={{fontWeight: "bold"}}>This student ID of user is 7{id}</h1>
        </div>
    )
}

export default Profile