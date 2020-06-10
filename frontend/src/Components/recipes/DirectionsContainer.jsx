import React from "react"
import Direction from './Direction'

const DirectionsContainer = ({ directions }) => {
    let directionsArr = []
    if (directions.length > 0) {
        for (let i = 0; i < directions.length; i++){
            directionsArr.push(<Direction direction={ directions[i] } key={i + 1} />)
        }
        return <ol className="hashtags-container" >{ directionsArr }</ol>
    }
    return <p>No Directions</p>
}

export default DirectionsContainer