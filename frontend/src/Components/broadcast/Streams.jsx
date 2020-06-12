import React, { useEffect, useState } from "react";
import useSocket from 'use-socket.io-client';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LinksContainer from './LinksContainer';
import{Container, Typography} from '@material-ui/core'

const Streams = () => {
    const [broadcasters, setBroadcasters] = useState([])

    const ENDPOINT = "https://pantry-party.herokuapp.com/";
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
                <Typography variant='h3' className="heading" style={{color:'#ed7902', fontWeight:'bold', marginTop:'20px'}}>It's Pantry Party Time!</Typography>
                <Typography variant='h5'>Available live streams are listed below!</Typography>
                <div>
                    <LinksContainer broadcasters={ broadcasters } />
                </div>
            
            </div>
        </div>
    )
}

export default Streams;