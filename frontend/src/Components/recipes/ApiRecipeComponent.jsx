import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SuggestedRecipeCard from './SuggestedRecipeCard'
import { Typography, Container } from '@material-ui/core'

const ApiRecipesComponent = ({ user }) => {
    // similar to component did mount
    const [recipeArr, setRecipeArr] = useState([])
    useEffect(() => {
        const populateRecipeArr = async () => {
            let r1 = getRandomRecipeFromAPI()
            let r2 = getRandomRecipeFromAPI()
            let r3 = getRandomRecipeFromAPI()
            let r4 = getRandomRecipeFromAPI()

            let recipes = await Promise.all([r1, r2, r3, r4])
            console.log('hello recipes', recipes)
            setRecipeArr(recipes)
        }
        populateRecipeArr();
    }, [])

    //gets random recipe from API
    const getRandomRecipeFromAPI = async () => {
        try {
            let { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
            let recipe = data.meals[0]
            console.log("heree", recipe)
            return recipe
        } catch (error) {
            console.log('err:', error)
        }
    }
    const suggestedRecipeThumbnail = recipeArr.map(el =>
        <SuggestedRecipeCard
            id={el.idMeal}
            imgSrc={el.strMealThumb}
            recipeName={el.strMeal}
            alt='db recipe'
        >
            {el}
        </SuggestedRecipeCard >)



    return (
        <Container>
            <Typography variant='h5' style={{fontWeight:'bold'}}>Recipe Suggestions</Typography> <br />

            <div className='dashboard-apiSuggestions'>
                {suggestedRecipeThumbnail}
            </div>
        </Container>

    )
}

export default ApiRecipesComponent