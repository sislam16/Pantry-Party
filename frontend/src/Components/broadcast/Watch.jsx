import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom'
import useSocket from 'use-socket.io-client'
import DirectionsDisplay from './DirectionsDisplay';
import {Button, Container, Typography} from '@material-ui/core'

const Watch = () => {
    const [stepsCounter, setStepsCounter] = useState(0)
    const [directions, setDirections] = useState([])
    let { broadcasterId } = useParams();

    const config = {
        iceServers: [
            {
                urls: ["stun:stun.l.google.com:19302"]
            }
        ]
    };

    const ENDPOINT = "https://pantry-party.herokuapp.com/";
    const [socket] = useSocket(ENDPOINT);

    let peerConnection
    const videoRef = useRef();
    let watcherId = socket.id

    useEffect(() => {
        socket.on("offer", (id, description) => {
            peerConnection = new RTCPeerConnection(config);
            peerConnection
                .setRemoteDescription(description)
                // we call the createAnswer() function to send back a connection
                // answer to the request of the broadcaster.
                .then(() => peerConnection.createAnswer())
                .then(sdp => peerConnection.setLocalDescription(sdp))
                .then(() => {
                    socket.emit("answer", id, peerConnection.localDescription);
                });
            // After the connection is established we can continue by getting
            // the video stream using the ontrack event listener of the
            // peerConnection object.
            peerConnection.ontrack = event => {
                videoRef.current.srcObject = event.streams[0];
            };
            peerConnection.onicecandidate = event => {
                if (event.candidate) {
                    socket.emit("candidate", id, event.candidate);
                }
            };
        });
    }, [socket])

    useEffect(() => {
        socket.on("candidate", (id, candidate) => {
            peerConnection
                .addIceCandidate(new RTCIceCandidate(candidate))
                .catch(e => console.error(e));
        });
    }, [socket])

    useEffect(() => {
        socket.on("directions-response", (directions, stepsCounter) =>{
            setDirections(directions)
            setStepsCounter(stepsCounter)
        })
    }, [socket]);

    useEffect(() => {
        socket.on('increment-steps', () => {
            setStepsCounter(stepsCounter + 1)
        })
    })

    useEffect(() => {
        socket.on('decrement-steps', () => {
            setStepsCounter(stepsCounter - 1)
        })
    })

    useEffect(() => {
        socket.on("broadcastDisconnect", () => {
            peerConnection.close();
        });
    }, [socket]);

    useEffect(() => {
        window.onunload = window.onbeforeunload = () => {
            socket.close();
            socket.emit('disconnectPeer')
        };
    }, [window])


    const handleWatcher = () => {
        socket.emit("watcher", broadcasterId);
        socket.emit("directions-request", broadcasterId, watcherId);
    }

    return (
        <Container>
        <div>
            <Typography variant='h3' style={{fontWeight:'bold'}}>Watch page</Typography><br/>
            <video className="video" autoPlay={true} ref={videoRef} /><br/>
            <Button onClick={() => handleWatcher()}>Connect</Button><br/>
            <DirectionsDisplay directions={ directions } stepsCounter={ stepsCounter } />
        </div>
        </Container>
    )
}

export default Watch