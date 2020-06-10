import React from "react"

const DirectionsDisplay = ({ directions, stepsCounter }) => {
    if (directions.length > 0) {
        return (
            <div className="directions-display">
                <h3>Step {stepsCounter + 1}:</h3>
                <p>{directions[stepsCounter]}</p>
            </div>
        )
    }
    return <p>No Directions</p>
}

export default DirectionsDisplay