import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Youtube from 'react-youtube'

const APIRecipe = ({ user }) => {
    const [apiRecipe, setApiRecipe] = useState({})
    const [directionsArr, setDirectionsArr] = useState([])
    const [ingredientList, setIngredientList] = useState({})
    const [ytVideoId, setYtVideoId] = useState('')

    const { recipe_id } = useParams()

    useEffect(() => {
        const getFullRecipeById = async () => {
            try {
                let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe_id}`)
                let recipe = data.meals[0]
                console.log('here', recipe)
                setApiRecipe(recipe)
                let video_id = recipe.strYoutube.split('=')[1]
                setYtVideoId(video_id)
                setDirectionsArr(recipe.strInstructions.split('.'))
                // apiIngredientsList(recipe)
            } catch (error) {
                console.log('error:', error)
            }
        }
        getFullRecipeById()
    }, [])

    useEffect(()=>{
        const apiIngredientsList = (apiRecipe) => {
            let ingredientObj = {}
            let measurementArr = []
            for (let measurement in apiRecipe) {
                if (measurement.includes('strMeasure') && apiRecipe[measurement] !== ' ' && apiRecipe[measurement] !== null) {
                    measurementArr.push(apiRecipe[measurement])
                }
            }
            let index = 0;
            for (let ingredient in apiRecipe) {
                if (ingredient.includes('strIngredient') && apiRecipe[ingredient] !== '' && apiRecipe[ingredient] !== null) {
                    ingredientObj[apiRecipe[ingredient]] = measurementArr[index]
                    index++
                }
            }
            setIngredientList(ingredientObj)
        }
        apiIngredientsList(apiRecipe)

    }, [apiRecipe])


    const directionList = directionsArr.map((el) => (
        <li>{el}</li>
    ))
    console.log('ingredientList', ingredientList)
    return (

        <div className="meal-db-recipe">
            <h1>{apiRecipe.strMeal}</h1>
            <Youtube
                videoId={ytVideoId}
            />
            <br></br>
            <h3>Ingredients:</h3>
            <h3>Directions:</h3>
            <ol>{directionList}</ol>

        </div>
    )
}

export default APIRecipe;