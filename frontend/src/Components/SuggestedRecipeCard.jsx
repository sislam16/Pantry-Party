import React from 'react'
import {Link} from 'react-router-dom'

const SuggestedRecipeCard = ({recipeName, imgSrc, id}) => {
    console.log(recipeName, imgSrc)
    return(
        <Link to={`/recipe/${id}`}>
        <div className='api-recipe' id={id} > 
        {/*  make a function that expands thumbnail to recipe page */ }
            <img src ={imgSrc} />
            <h1>{recipeName}</h1>
        </div>
        </Link>
    )
}

export default SuggestedRecipeCard