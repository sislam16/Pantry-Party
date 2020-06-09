import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CookbookRecipeCard from './CookbookCard'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'

const UserDashCookbook = ({ user }) => {
    const [cookbookArr, setCookbookArr] = useState([])

    useEffect(() => {
        const getRecipeFromCookbook = async () => {
            let user_id = user.id
            let { data } = await axios.get(`/api/recipes/user/${user.id}`)
            console.log(data)
            let cookbookRecipes = data.payload
            setCookbookArr(cookbookRecipes)
        }
        // getRecipeFromCookbook()
    }, [])

  
    if (cookbookArr.length === 0) {
        return(
            <div className='dashboard-cookbook'>
              <Link to='/cookbook/new'><Button>Add a Recipe</Button></Link>
            </div>
        )

    } else {
        const cookbookThumbnail = cookbookArr.map(el =>
            <CookbookRecipeCard
                id={el.id}
                name={el.recipe_name}
                img={el.recipe_img}
            />
        )
    
        return (
            <div className='dashboard-cookbook'>
                {cookbookThumbnail}
            </div>
        )

    }
}
export default UserDashCookbook