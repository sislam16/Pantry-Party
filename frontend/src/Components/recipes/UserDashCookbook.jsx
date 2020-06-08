import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CookbookRecipeCard from './CookbookCard'
import {Link} from 'react-router-dom'

const UserDashCookbook = ({ user }) => {
    console.log(user)
    const [cbrecipeArr, setCbRecipeArr] = useState([])

    useEffect(() => {
        const getRecipeFromCookbook = async () => {
            // let user_id = user.id
            let { data } = await axios.get(`/recipes/user/${user.id}`)
            console.log(data)
            let cookbookRecipes = data.payload
            setCbRecipeArr(cookbookRecipes)
        }
        getRecipeFromCookbook()
    }, [])

    const cookbookThumbnail = cbrecipeArr.map(el =>
        <CookbookRecipeCard
            id={el.id}
            name={el.recipe_name}
            img={el.recipe_img}
        />
    )

    if (cbrecipeArr.length === 0) {
        return(
            <div>
              <Link to='/cookbook/new'><button>Add a Recipe</button></Link>
            </div>
        )

    } else {
        return (
            <div className='dashboard-cookbook'>
                {cookbookThumbnail}
            </div>
        )

    }
}
export default UserDashCookbook