import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Typography } from '@material-ui/core';

const SuggestedRecipeCard = ({ recipeName, imgSrc, id }) => {
    return (
        <Link to={`/recipe/random/${id}`} style={{ textDecoration: 'none' }}>
            <Card className='api-recipe' id={id} style={{ backgroundColor: '#fdbd10', color: '#ffffff', margin: '5px', border: '2px solid black', width: '300px', height: '300px' }}>
                <div className='api-title'><Typography variant='h5' style={{fontWeight:'bold'}}>{recipeName}</Typography></div>
                <div className='api-img'><img src={imgSrc} /></div>
            </Card>
        </Link>
    )
}

export default SuggestedRecipeCard