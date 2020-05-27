import React, {useEffect} from 'react'
import axios from 'axios'


const APIRecipe = ({user,id}) =>{
    useEffect(() =>{
        getFullRecipeById()
    }, [])

    const getFullRecipeById = async (props) =>{
        // let id = props.match.params.id
        try{    
            let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            console.log(data.payload)
        } catch(error){
            console.log('error:', error)
        }
    }

return(
    <div className="meal-db-recipe">
        <h1>hi</h1>

    </div>
)
}

export default APIRecipe;