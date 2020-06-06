import React, { useState } from 'react';
import axios from 'axios';

const NewRecipe = () => {
    const [recipe_name, setRecipeName] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [directions, setDirections] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault()

        let bodyObj = {
            recipe_name: recipe_name,  
            directions: directions, 
        }

        try{
        let {data} = await axios.post(`/api/recipes/new`, bodyObj)
        console.log(data.payload)
        } catch(error) {
            console.log('error:', error)
        }
    }
    return (
        <div>
            <form action="" className = 'newRecipeForm' onSubmit={handleSubmit}>
                <input type="text" placeholder='name' onChange={e => setRecipeName(e.target.value)} />
                <input type="text" placeholder='ingredients' onChange={e => setIngredients(e.target.value)} />
                <input type="text" placeholder='directions' onChange={e => setDirections(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )

}

export default NewRecipe