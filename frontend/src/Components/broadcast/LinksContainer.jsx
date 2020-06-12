import React from "react"
import BroadcasterLink from './BroadcasterLink'
import {Typography} from '@material-ui/core'
const LinksContainer = ({ broadcasters }) => {
    let links = []
    if (broadcasters.length > 0) {
        // console.log("linksContainer", broadcasters)
        for (let broadcaster of broadcasters){
            // console.log("broadcaster", broadcaster)
            links.push(<BroadcasterLink broadcaster={broadcaster} key={broadcaster.id} />)
        }
        return <ul className="links-container" >{ links }</ul>
    }
    return <Typography variant='p' style={{fontWeight:'bold'}}>No Streams</Typography>
}

export default LinksContainer