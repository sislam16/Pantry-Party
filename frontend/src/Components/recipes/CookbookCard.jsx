import React from 'react'
import { Link } from 'react-router-dom'
import {Card, Typography} from '@material-ui/core';

const CookbookRecipeCard = ({ recipe_name, recipe_img, id }) => {
    console.log('name:', recipe_name)
    console.log('img link:', recipe_img)

    return (
        <Link to={`/cookbook/recipe/${id}`}>
            <Card className='api-recipe' id={id} style={{backgroundColor:'#fdbd10', height:'100%', border:'2px solid black', margin:'5px'}}>
               <div> <Typography variant ='h5'>{recipe_name}</Typography></div>
                <div><img src={recipe_img} className='api-img' alt='recipe'/>{recipe_img}</div>
            </Card>
        </Link>
    )
}
export default CookbookRecipeCard