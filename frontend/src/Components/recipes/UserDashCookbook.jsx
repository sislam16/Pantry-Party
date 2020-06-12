import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CookbookRecipeCard from './CookbookCard'
import { Link } from 'react-router-dom'
import { Button, Typography, Container } from '@material-ui/core'

const UserDashCookbook = ({ user }) => {
    const [cookbookArr, setCookbookArr] = useState([])

    useEffect(() => {
        const getRecipeFromCookbook = async () => {
            try {
            let { data } = await axios.get(`/api/recipes/user/${user.id}`)
            let cookbookRecipes = data.payload
            setCookbookArr(cookbookRecipes)   
        } catch (error) {
            console.log('error', error)
        }
    }
        getRecipeFromCookbook()
    }, [])

    const cookbookThumbnail = cookbookArr.map(el =>
        <CookbookRecipeCard
            id={el.id}
            name={el.recipe_name}
            img={el.recipe_img}
        />
    )

    const newArr = []
    const getFourRecipes = () => {
        for (let i = 0; i <= 3; i++) {
            if (cookbookThumbnail[i]) {
                newArr.push(cookbookThumbnail[i])
            }
        }
    }

    getFourRecipes(cookbookThumbnail)


    if (cookbookArr.length === 0) {
        return (
            <Container>
                <Typography variant='h5'>Cookbook</Typography><br />
                <div className='dashboard-cookbook'>
                    <Link to='/cookbook/new'><Button>Add a Recipe</Button></Link>
                </div>
            </Container>

        )

    } else {
        return (
            <Container style={{ marginTop: '20px' }}>
                <Typography variant='h5' style={{ fontWeight: 'bold' }}>Cookbook</Typography><br />
                <div className='dashboard-cookbook'>
                    {newArr}
                    <Link to='/cookbook'><Button>View Recipes</Button></Link>
                </div>
            </Container>
        )

    }
}
export default UserDashCookbook