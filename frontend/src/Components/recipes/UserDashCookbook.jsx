import React, {useEffect, useState} from 'react'
import axios from 'axios'

const UserDashCookbook = ({user}) =>{
    const [cbrecipeArr, setCbRecipeArr] = useState([])

    const getRecipeFromCookbook = async() =>{
        let user_id = 
        let {data} = await axios.get(`/recipes/user/${user_id}`)
    }

return(
    <div>


    </div>
)

}

export default UserDashCookbook