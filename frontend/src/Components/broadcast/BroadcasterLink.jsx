import React from "react"
import { Link } from 'react-router-dom'

const BroadcasterLink = ({ broadcaster }) => {
    let broadcasterId = broadcaster.broadcaster_id
    let name = broadcaster.event_name
    let description = broadcaster.event_description


    return <li><Link to={`/watch/${broadcasterId}`}>{name}: {description}</Link></li>
}

export default BroadcasterLink