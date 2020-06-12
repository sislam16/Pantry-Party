import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CookbookRecipeCard from './CookbookCard'
import { Container, Typography, Card, Button } from '@material-ui/core'

const Cookbook = ({ user }) => {
    const [cookbook, setCookbook] = useState([])

    useEffect(() => {
        const getUserRecipes = async () => {
            try {
                let { data } = axios.get(`/api/recipes/users/${user.id}`)
                setCookbook(data.payload)
            } catch (error) {
                console.log('error', error)
            }
        }
        getUserRecipes()
    }, [])


    const cookbookcard = cookbook.map(el =>
        <CookbookRecipeCard
            id={el.id}
            name={el.recipe_name}
            img={el.recipe_img}
        />)

    return (
        <div>
            <Container>
                <Typography variant='h3' style={{fontWeight:'bold', marginTop:'20px', color:'#ed7902'}}>Cookbook</Typography>
               <div>
               {cookbookcard}
               </div> 
                <Link to='/cookbook/new'><Button>Add a Recipe</Button></Link>
            </Container>

        </div>
    )
}

export default Cookbook