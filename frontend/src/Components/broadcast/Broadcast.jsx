import React, { useEffect, useState, useRef } from 'react';
import useSocket from 'use-socket.io-client';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import useUserMedia from './useUserMedia'
import DirectionsDisplay from './DirectionsDisplay';
import {Typography, Container, Button} from '@material-ui/core'

const Broadcast = () => {
    const [currEvent, setCurrEvent] = useState({})
    const [directions, setDirections] = useState([])
    const [stepsCounter, setStepsCounter] = useState(0)
    const [peerConnections, setPeerConnections] = useState({});
    const [numberOfViewers, setNumberOfViewers] = useState(0)
    const [constraints, setConstraints] = useState({
        audio: true,
        video: { facingMode: "user" }
    });

    let { eventId } = useParams();

    const config = {
        iceServers: [
            {
                urls: ["stun:stun.l.google.com:19302"]
            }
        ]
    };

    const ENDPOINT = "http://127.0.0.1:3001";
    const [socket] = useSocket(ENDPOINT);

    const videoRef = useRef();
    const mediaStream = useUserMedia(constraints);

    if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
        videoRef.current.srcObject = mediaStream;
    }

    console.log("videoRef =", videoRef);

    useEffect(() => {
        console.log("getEvent called")
        getEvent();
    }, []);

    useEffect(() => {
        if (currEvent.recipe_id) {
            console.log("handleGetRecipeDirections called")
            handleGetRecipeDirections();
        }
    }, [currEvent])

    useEffect(() => {
        socket.on("watcher", id => {
            console.log("watcher received from Server")
            const peerConnection = new RTCPeerConnection(config);
            peerConnections[id] = peerConnection;

            setPeerConnections(peerConnections[id] = peerConnection)
            let stream = videoRef.current.srcObject
            console.log("stream used by Watcher", stream)
            stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));

            peerConnection.onicecandidate = event => {
                if (event.candidate) {
                    socket.emit("candidate", id, event.candidate);
                }
            };

            peerConnection
                .createOffer()
                .then(sdp => peerConnection.setLocalDescription(sdp))
                .then(() => {
                    socket.emit("offer", id, peerConnection.localDescription);
                });

            setNumberOfViewers(Object.keys(peerConnections).length)
        });
    }, [socket]);

    useEffect(() => {
        socket.on("answer", (id, description) => {
            peerConnections[id].setRemoteDescription(description);
        });
    }, [socket]);

    useEffect(() => {
        socket.on("candidate", (id, candidate) => {
            peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));
        });
    }, [socket]);

    useEffect(() => {
        socket.on("directions-request", () =>{
            console.log("directions request heard by broadcaster")
            socket.emit("directions-response", directions, stepsCounter)
        })
    })

    useEffect(() => {
        // closes connection when client disconnects
        socket.on("disconnectPeer", id => {
            console.log("disconnectPeer triggered")
            peerConnections[id].close();
            delete peerConnections[id];
            setNumberOfViewers(Object.keys(peerConnections).length);
        });
    }, [socket]);

    useEffect(() => {
        // close the socket if the user closes the window
        window.onunload = window.onbeforeunload = () => {
            socket.close();
            socket.emit('disconnectBroadcaster')
        };
    }, [window])

    const handleCanPlay = () => {
        videoRef.current.play();
    };

    // const handleNewBroadcaster = () => {
    //     socket.emit('broadcaster', socket.id)
    //     console.log("broadcaster emitted", socket.id)
    // };

    const handleGetRecipeDirections = async () => {
        let recipeDirections = await (await axios.get(`/api/recipes/${currEvent.recipe_id}`)).data.payload.directions;
        let splitDirections = recipeDirections.split(",")
        setDirections(splitDirections)
        socket.emit('broadcast-directions', splitDirections)
    }

    const incrementSteps = () => {
        setStepsCounter(stepsCounter + 1)
        socket.emit('increment-steps')
    }

    const decrementSteps = () => {
        setStepsCounter(stepsCounter - 1)
        socket.emit('decrement-steps')
    }

    const getEvent = async () => {
        let broadcastEvent = await (await axios.get(`/api/events/${eventId}`)).data.payload;
        console.log("broadcastEvent", broadcastEvent)
        setCurrEvent(broadcastEvent)
    }

    const launchBroadcast = async () => {
        try {
            let broadcasterId = socket.id
            let response = await axios.patch(`/api/events/update/${eventId}`, {
                active: 'true',
                broadcast_id: broadcasterId
            })
            socket.emit('new-broadcaster')
            return response
        } catch (error) {
            console.log('err:', error);
        }
    };

    const disconnectBroadcaster = async () => {
        try {
            let offTheAir = await axios.patch(`/api/events/update/${eventId}`, {
                active: 'false'
            })
            socket.emit('stop-broadcaster')
            console.log(offTheAir)
            return offTheAir
        } catch (error) {
            console.log('err:', error)
        }
    };

    return (
        <Container>
        <div>
            <Typography variant='h3' style={{color:'#ed7902', fontWeight:'bold', marginTop:'20px'}}>Smile! You're on camera!</Typography>
            <video className="video" autoPlay={true} muted ref={videoRef} onCanPlay={handleCanPlay} playsInline muted /><br/>
            {/* <button onClick={() => handleNewBroadcaster()}>Connect</button> */}
            <Button onClick={() => launchBroadcast()}>Start Broadcast</Button>
            <Button onClick={() => disconnectBroadcaster()}>Disconnect</Button>
            <Typography variant='h5' style={{fontWeight:'bold'}}>Viewers: {numberOfViewers}</Typography> <br/>
            <DirectionsDisplay directions={directions} stepsCounter={stepsCounter} />
            <Button onClick={() => decrementSteps()}>Previous Step</Button>
            <Button onClick={() => incrementSteps()}>Next Step</Button><br/>
            <Typography variant='p'><span style={{fontWeight:'bold'}}>1.</span> To start a stream, first enter a publicly visible USERNAME and click CONNECT to connect to the server.</Typography><br/>
            <Typography variant='p'><span style={{fontWeight:'bold'}}>2.</span> Don't worry, your livestream broadcast won't be accessible until you click the START BROADCAST button!</Typography><br/>
            <Typography variant='p' style={{paddingBottom:'20px'}}><span style={{fontWeight:'bold'}}>3.</span> When you're done with your broadcast, click DISCONNECT to remove your stream from public view and then close your tab to close your camera!</Typography><br/>
        </div>
        </Container>
    )
}

export default Broadcast