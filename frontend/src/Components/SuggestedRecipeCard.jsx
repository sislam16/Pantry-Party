import React from 'react'

const SuggestedRecipeCard = (props) => {
    return(
        <div className='api-recipe' > 
        {/*  make a function that expands thumbnail to recipe page */ }
            <img src ={props.strMealThumb} />
            <h1>{props.strMeal}</h1>
        </div>
    )
}

export default SuggestedRecipeCard