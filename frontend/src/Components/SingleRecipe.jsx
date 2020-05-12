/*
Recipe Page | Front End | Tost-Host/Pantry Party Web App
GROUP 7: Suzette Islam, Douglas MacKrell, Maliq Taylor
*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom'


const SingleRecipe = () => {

    const [recipe, setRecipe] = useState({})
    const [id, setId] = useState(0)

    useEffect(() => {
        displayRecipe(id);
    }, [])

    const displayRecipe = async (recipeId) => {
        try {
            let { recipe } = await axios.get(`/full/${recipeId}`)
            let singleRecipe = recipe.payload
            console.log(singleRecipe)
            setRecipe(singleRecipe)  
    
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='recipe-page'>
            <div className='Recipe-header'>
                <h1>test</h1>
            </div>

            <div className='Recipe-img'>

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