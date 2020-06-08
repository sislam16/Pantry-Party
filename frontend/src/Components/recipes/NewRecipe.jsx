import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Checkbox, Typography } from '@material-ui/core'

const NewRecipe = () => {
    const [recipe_name, setRecipeName] = useState('')
    const [recipe_img, setRecipeImg] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [directions, setDirections] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        let bodyObj = {
            recipe_name: recipe_name,
            directions: directions,
            ingredients: ingredients
        }

        try {
            let { data } = await axios.post(`/api/recipes/new`, bodyObj)
            console.log(data.payload)
        } catch (error) {
            console.log('error:', error)
        }
    }
    const addIngredient = (e) =>{
        e.preventDefault()
    }
    return (
        <div>
            <Typography variant='h4'>Add Recipe to Cookbook </Typography>

            <form action="" className='newRecipeForm' onSubmit={handleSubmit}>
                <TextField variant='filled' id="standard-size-small" type="text" label='Recipe Name' onChange={e => setRecipeName(e.target.value)} margin='normal' /> <br />
                <TextField variant='filled' id="standard-size-small" type='text' label='recipe_img' onChange={e=>setRecipeImg(e.target.value)} margin='normal'/><br/>
                <TextField variant='filled' id="standard-size-small" type="text" label='Directions' onChange={e => setDirections(e.target.value) } margin='normal'helperText="Separate steps by ','" /><br />
                <TextField variant='filled' id="standard-size-small" type="text" label='Directions' onChange={e => setDirections(e.target.value) } margin='normal' /><br />
                <div>
                    <TextField variant='filled' id="standard-size-small" type='number' label='Ingredient Amount' />
                    <TextField variant='filled' id="standard-size-small" type='text' label='Measurement' />
                    <TextField variant='filled' id="standard-size-small" type="text" label='Ingredients' onChange={e => setIngredients(e.target.value)} />
                    <Button>+</Button><br />
                </div>
                    <TextField variant='filled' id="standard-size-small" type='text' label='Hashtags' margin='normal' helperText="Separate hashtags by ','" /> <br />
                <Button>Submit</Button>
            </form>
        </div>
    )

}

export default NewRecipe