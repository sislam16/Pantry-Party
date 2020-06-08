import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';

const CookbookRecipeCard = ({ recipe_name, recipe_img, id }) => {
    console.log('name:', recipe_name)
    console.log('img link:', recipe_img)

    return (
        <Link to={`/cookbook/recipe/${id}`}>
            <Card className='api-recipe' id={id} variant='outlined'>
                <h1>{recipe_name}</h1>
                <img src={recipe_img} className='api-img' />
            </Card>
        </Link>
    )
}
export default CookbookRecipeCard