/*
Recipe Page | Front End | Tost-Host/Pantry Party Web App
GROUP 7: Suzette Islam, Douglas MacKrell
*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleRecipe = () => {
    const [recipe, setRecipe] = useState({})
    const { recipe_id } = useParams()

    useEffect(() => {
        const displayRecipe = async () => {
            try {
                let { data } = await axios.get(`/api/recipes/full/${recipe_id}`)
                console.log(data.payload)
                let singleRecipe = data.payload
                console.log(singleRecipe)
                setRecipe(singleRecipe)

            } catch (error) {
                console.log(error)
            }
        }
        displayRecipe();
    }, [])



    return (
        <div className='recipe-page'>
            <div className='Recipe-header'>
                {/* <h1>{recipe.recipe_name}</h1> */}
            </div>

            <div className='Recipe-img'>
                {/* <img src={recipe_img} /> */}
            </div>

            <div className='Recipe-ingredients'>

            </div>

            <div className='Recipe-steps'>

            </div>

            <div className='Recipe-hashtags'>

            </div>
        </div>
    )
}

export default SingleRecipe;