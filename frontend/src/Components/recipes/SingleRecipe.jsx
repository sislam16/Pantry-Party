/*
Recipe Page | Front End | Tost-Host/Pantry Party Web App
GROUP 7: Suzette Islam, Douglas MacKrell
*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import IngredientsContainer from './IngredientsContainer';
import HashtagsContainer from './HashtagsContainer';
import DirectionsContainer from './DirectionsContainer';

const SingleRecipe = () => {
    const [recipe, setRecipe] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [hashtags, setHashtags] = useState([])
    const [directions, setDirections] = useState([])
    const [recipeName, setRecipeName] = useState("")
    const [recipeImg, setRecipeImg] = useState("https://upload.wikimedia.org/wikipedia/commons/d/d2/Food_Bank_icon.svg")
    const { recipe_id } = useParams()

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                let { data } = await axios.get(`/api/recipes/full/${recipe_id}`)
                console.log(data.payload)
                let singleRecipe = data.payload
                console.log(singleRecipe)
                setRecipe(singleRecipe)
                setRecipeName(singleRecipe[0].recipe_name)
                setRecipeImg(singleRecipe[0].recipe_img)

            } catch (error) {
                console.log(error)
            }
        }
        fetchRecipe();

    }, [])

    useEffect(() => {
        if (recipe.length > 0) {
            const bundleIngredients = () => {
                let recipeIngredients = recipe[1];
                setIngredients(recipeIngredients);
            }
            const bundleHashtags = () => {
                let recipeHashtags = recipe[2];
                setHashtags(recipeHashtags);
            }
            const splitDirections = () => {
                let directionsStr = recipe[0].directions;
                setDirections(directionsStr.split(","))
            }
            bundleIngredients();
            bundleHashtags();
            splitDirections();
        }
    }, [recipe])


    return (
        <div className='recipe-page'>
            <div className='Recipe-header'>
                <h1>{recipeName}</h1>
            </div>

            <div className='Recipe-img'>
                <img src={recipeImg} alt={recipeName} />
            </div>

            <div className='Recipe-ingredients'>
                <h3>Ingredients</h3>
                <IngredientsContainer ingredients={ ingredients } />
            </div>

            <div className='Recipe-steps'>
                <h3>Directions</h3>
                <DirectionsContainer directions={ directions } />
            </div>

            <div className='Recipe-hashtags'>
                <h3>Hashtags</h3>
                <HashtagsContainer hashtags={ hashtags } />
            </div>
        </div>
    )
}

export default SingleRecipe;