import React, { useEffect, useState } from "react";
import useSocket from 'use-socket.io-client';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LinksContainer from './LinksContainer';

const Streams = () => {
    const [broadcasters, setBroadcasters] = useState([])

    const ENDPOINT = "http://127.0.0.1:3001";
    const [socket] = useSocket(ENDPOINT);

    useEffect(() => {
        socket.on('active-broadcaster', () => {
            // console.log("active-broadcaster emitted")
            // console.log("broadcasters active-broadcasters", broadcasters)
            // console.log("broadcaster active-broadcasters", broadcaster)
            // let broadcastersCopy = [...broadcasters, broadcaster]
            // setBroadcasters(broadcastersCopy);
            findActiveStreams();
        })
    }, [socket, broadcasters])

    const findActiveStreams = async () => {
        console.log("findActiveStreams called")
        let activeStreams = await axios.get(`/api/events/active`)
        let streams = activeStreams.data.payload
        setBroadcasters(streams)
        console.log("streams", streams)
    }

    useEffect(() => {
        findActiveStreams()
    }, [])

    console.log("state broadcasters", broadcasters)

    return (
        <div className="Join-OuterContainer">
            <div className="Join-InnerContainer">
                <h1 className="heading">It's Pantry Party Time!</h1>
                <h3>Available live streams are listed below!</h3>
                {/* <Link to={`/broadcast`}>
                    <button className={'button mt-20'} type="submit">Start Broadcasting</button>
                </Link> */}
                <div>
                    <LinksContainer broadcasters={ broadcasters } />
                </div>
            
            </div>
        </div>
    )
}

export default Streams;