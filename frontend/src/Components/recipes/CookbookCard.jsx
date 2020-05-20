import React from 'react'
import {Link} from 'react-router-dom'

const CookbookRecipeCard = ({recipeName, imgSrc, id}) => {
    return(
        <div className='api-recipe' id={id} > 
        {/*  make a function that expands thumbnail to recipe page */ }
            <img src ={imgSrc} />
            <h1>{recipeName}</h1>
        </div>
    )
}
export default CookbookRecipeCard