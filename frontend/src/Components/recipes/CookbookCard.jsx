import React from 'react'
import {Link} from 'react-router-dom'

const CookbookRecipeCard = ({recipe_name, recipe_img, id}) => {
    console.log('name:', recipe_name)
    console.log('img link:', recipe_img)
    
    return(
        <Link to ={`/cookbook/recipe/${id}`}>
        <div className='api-recipe' id={id} > 
        {/*  make a function that expands thumbnail to recipe page */ }
            <img src ={recipe_img} />
            <h1>{recipe_name}</h1>
        </div>
        </Link>
    )
}
export default CookbookRecipeCard