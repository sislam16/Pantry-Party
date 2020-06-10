/*
Recipe Page | Front End | Tost-Host/Pantry Party Web App
GROUP 7: Suzette Islam, Douglas MacKrell
*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import IngredientsContainer from './IngredientsContainer';
import HashtagsContainer from './HashtagsContainer';

const SingleRecipe = () => {
    const [recipe, setRecipe] = useState({})
    const [ingredients, setIngredients] = useState([])
    const [hashtags, setHashtags] = useState([])
    const [directions, setDirections] = useState([])
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
            recipeIngredients = recipe[1];
            setIngredients(recipeIngredients);
        }
        const bundleHashtags = () => {
            recipeHashtags = recipe[2];
            setHashtags(recipeHashtags);
        }
        const splitDirections = () => {
            directionsStr = recipe[0].directions;
            setDirections(directionsStr.split(","))
        }
        fetchRecipe();
        bundleIngredients();
        bundleHashtags();
        splitDirections();
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
                <p>Ingredients</p>
                <IngredientsContainer ingredients={ ingredients } />
            </div>

            <div className='Recipe-steps'>

            </div>

            <div className='Recipe-hashtags'>
                <p>Hashtags</p>
                <HashtagsContainer hashtags={ hashtags } />
            </div>
        </div>
    )
}

export default SingleRecipe;