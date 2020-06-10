import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'

const BroadcasterLink = ({ broadcaster }) => {
    const [username, setUserName] = useState('')
    let broadcasterId = broadcaster.broadcast_id
    let name = broadcaster.event_name
    let description = broadcaster.event_description

    const getUsername = async () => {
        let displayName = await (await axios.get(`api/users/id/${broadcaster.user_id}`)).data.payload.username
        setUserName(displayName)
        console.log("username", displayName)
    }
    useEffect(() => {
        getUsername()
    }, [])

    return <li><Link to={`/watch/${broadcasterId}`}>{name}: {description} | HOST: {username}</Link></li>
}

export default BroadcasterLink