import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const APIRecipe = ({ user }) => {
    const [apiRecipe, setApiRecipe] = useState({})
    const [ingredientArr, setIngredientArr] = useState([])
    const [measureArr, setMeasureArr] = useState([])
    const { recipe_id } = useParams()

    useEffect(() => {
        const getFullRecipeById = async () => {
            try {
                let { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe_id}`)
                let recipe = data.meals[0]
                console.log(recipe)
                setApiRecipe(recipe)
            } catch (error) {
                console.log('error:', error)
            }
        }
        getFullRecipeById()
    }, [])

    useEffect(() =>{
        const apiIngredientsList = () => {
            let ingList = []
            let measureList = []
            for (let key in apiRecipe) {
                if (key.includes('strIngredient')) {
                    ingList.push(apiRecipe[key])
                    setIngredientArr(ingList)
                }
                if (key.include('strMeasure')) {
                    measureList.push(apiRecipe[key].value)
                    setMeasureArr(measureList)
                }
            }
            console.log(ingList)
            console.log(measureList)
        }
        apiIngredientsList()
    },[])
  
    return (
        <div className="meal-db-recipe">
            <h1>{apiRecipe.strMeal}</h1>
            <iframe src={apiRecipe.strYoutube}
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
            />
            <br></br>
            <h3>Ingredients:</h3>
            <h3>Directions:</h3>
            <p>{apiRecipe.strInstructions}</p>

        </div>
    )
}

export default APIRecipe;