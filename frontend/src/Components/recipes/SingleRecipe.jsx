/*
Recipe Page | Front End | Tost-Host/Pantry Party Web App
GROUP 7: Suzette Islam, Douglas MacKrell
*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleRecipe = () => {
    const [recipe, setRecipe] = useState({})
    const [ingredients, setIngredients] = useState([])
    const [hashtags, setHashtags] = useState([])
    const { recipe_id } = useParams()

    useEffect(() => {
        const fetchRecipe = async () => {
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
        const bundleIngredients = () => {
            recipeIngredients = recipe.payload[1];
            setIngredients(recipeIngredients);
        }
        const bundleHashtags = () => {
            recipeHashtags = recipe.payload[2];
            setHashtags(recipeHashtags);
        }
        fetchRecipe();
        bundleIngredients();
        bundleHashtags();
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