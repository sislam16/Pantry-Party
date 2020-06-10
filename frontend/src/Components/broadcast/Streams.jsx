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
            findActiveStreams();
        })
    }, [socket])

    useEffect(() => {
        socket.on('stop-broadcaster', () => {
            findActiveStreams();
        })
    }, [socket])

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
                <div>
                    <LinksContainer broadcasters={ broadcasters } />
                </div>
            
            </div>
        </div>
    )
}

export default Streams;