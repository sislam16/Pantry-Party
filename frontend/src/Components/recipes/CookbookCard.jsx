import React from 'react'
import { Link } from 'react-router-dom'
import {Card, Typography} from '@material-ui/core';

const CookbookRecipeCard = ({ name, img, id }) => {

    return (
        <div>
        <Link to={`/cookbook/recipe/${id}`}>
            <Card className='api-recipe' id={id} style={{backgroundColor:'#fdbd10', height:'100%', border:'2px solid black', margin:'5px', width:'300px', height:'300px'}}>   
               <div><Typography variant ='h5'>{name}</Typography></div>
                <div><img src={img} style={{width:'250px'}}/></div>  
            </Card>
        </Link>
        </div>
    )
}
export default CookbookRecipeCard