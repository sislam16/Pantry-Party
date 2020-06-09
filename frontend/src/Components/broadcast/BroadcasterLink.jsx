import React from "react"
import { Link } from 'react-router-dom'

const BroadcasterLink = ({ broadcaster }) => {
    let broadcasterId = broadcaster.broadcaster_id
    let name = broadcaster.event_name

    return <li><Link to={`/watch/${broadcasterId}`}>{name}</Link></li>
}

export default BroadcasterLink