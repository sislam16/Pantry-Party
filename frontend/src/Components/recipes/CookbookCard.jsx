import React from 'react'
import { Link } from 'react-router-dom'
import {Card, Typography} from '@material-ui/core';

const CookbookRecipeCard = ({ name, img, id }) => {

    return (
        <div>
        <Link to={`/cookbook/recipe/${id}`} style={{textDecoration:'none'}}>
            <Card className='api-recipe' id={id} style={{backgroundColor:'#fdbd10', height:'100%', border:'2px solid black', margin:'5px', width:'300px', height:'300px', color:'#ffffff'}}>   
               <div><Typography variant ='h5' style={{fontWeight:'bold'}}>{name}</Typography></div>
                <div><img src={img} style={{width:'250px'}}/></div>  
            </Card>
        </Link>
        </div>
    )
}
export default CookbookRecipeCard