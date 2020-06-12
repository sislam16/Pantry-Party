import React from "react"
import { Typography, Container } from '@material-ui/core'

const DirectionsDisplay = ({ directions, stepsCounter }) => {
    if (directions.length > 0) {
        return (
            <Container>
                <div className="directions-display">
                    <Typography variant='h6' style={{fontWeight:'bold'}}>Step {stepsCounter + 1}:</Typography>
                    <Typography variant='p'>{directions[stepsCounter]}</Typography>
                </div>
            </Container>
        )
    }
    return <Typography variant='p'>No Directions</Typography>
}

export default DirectionsDisplay