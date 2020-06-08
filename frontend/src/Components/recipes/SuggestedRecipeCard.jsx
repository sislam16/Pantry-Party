import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Typography} from '@material-ui/core';

const SuggestedRecipeCard = ({recipeName, imgSrc, id}) => {
    console.log(recipeName, imgSrc)
    return(
        <Link to={`/recipe/random/${id}`}>
        <Card className='api-recipe' id={id} > 
        <div className = 'api-title'><Typography variant='h5'>{recipeName}</Typography></div>
            <div className = 'api-img'><img src ={imgSrc} /></div>
            
            
        </Card>
        </Link>
    )
}

export default SuggestedRecipeCard