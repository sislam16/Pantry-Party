import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import { TextField, Button, Typography, Container } from '@material-ui/core'
import { recipeStyles } from '../styling/recipesStyling'

const NewRecipe = () => {
    const history = useHistory()
    const classes = recipeStyles()

    const [recipe_name, setRecipeName] = useState('')
    const [recipe_img, setRecipeImg] = useState('')
    const [ingredients, setIngredients] = useState([{ ingredient: '', amount: '', measure: '' }])
    const [directions, setDirections] = useState('')
    const [hashtags, setHashtags] = useState('')

    const handleSubmit = async () => {
        // e.preventDefault()
        let bodyObj = {
            recipe_name: recipe_name,
            recipe_img: recipe_img,
            directions: directions,
            ingredients: ingredients,
            hashtags: hashtags.split(',')
        }

        try {
            console.log('posting')
            let { data } = await axios.post(`/api/recipes/new`, bodyObj)
            console.log('recipe', data.payload)
            history.push('/cookbook') //redirect to cookbook when component is made 
        } catch (error) {
            console.log('error:', error)
        }
    }

    const addIngredientRow = (e) => {
        const copy = [...ingredients] //copy of arr in state
        copy.push({ ingredient: '', amount: '', measure: '' }) //push in a new obj for new ing
        setIngredients(copy) //set the state again 
    }

    const handleChange = (e, index, key) => {
        console.log(key)
        const copy = [...ingredients] //copy arr in state
        copy[index][key] = e.target.value // assign its value as input fields are being changed 
        setIngredients(copy) // set the state with ingredients filled out 
    }

    const inputFields = ingredients.map((ing, index) =>
        <>
            <TextField variant='filled' id="standard-size-small" type="text" value={ing.ingredient} label='Ingredients' onChange={e => handleChange(e, index, 'ingredient')} />
            <TextField variant='filled' id="standard-size-small" type="number" value={ing.amount} label='Amount' onChange={e => handleChange(e, index, 'amount')} />
            <TextField variant='filled' id="standard-size-small" type="text" value={ing.measure} label='Measure' onChange={e => handleChange(e, index, 'measure')} />
            <br />
        </>)


    return (
            <Container fixed style={{height: '70vh', backgroundColor: '#ffffff', width: '50vw', marginTop:'20px'}}>
                <form className='newRecipe'>
                    <Typography variant='h3'style={{color:'#ed7902', fontWeight:'bold'}}>Create Recipe </Typography>
                    <TextField variant='filled' id="standard-size-small" type="text" value={recipe_name} label='Recipe Name' onChange={e => setRecipeName(e.target.value)} margin='normal' /> <br />
                    <TextField variant='filled' id="standard-size-small" type='text' value={recipe_img} label='recipe_img' onChange={e => setRecipeImg(e.target.value)} margin='normal' /><br />
                    <TextField variant='filled' id="standard-size-small" type="text" value={directions} label='Directions' onChange={e => setDirections(e.target.value)} margin='normal' helperText="Separate steps by ','" /><br />
                    <div>
                        {inputFields}
                        <span onClick={addIngredientRow}>+</span><br />
                    </div>
                    <TextField variant='filled' id="standard-size-small" type='text' label='Hashtags' margin='normal' helperText="Separate hashtags by ','" value={hashtags} onChange={e => setHashtags(e.target.value)} /> <br />
                    <Button onClick={handleSubmit}>Submit</Button>
                </form>
            </Container>
    )

}

export default NewRecipe