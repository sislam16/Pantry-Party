import React from "react"
import Ingredient from './Ingredient'

const IngredientsContainer = ({ ingredients }) => {
    let ingredientsArr = []
    if (ingredients.length > 0) {
        for (let ingredient of ingredients){
            ingredientsArr.push(<Ingredient ingredient={ingredient} key={ingredient.id} />)
        }
        return <ul className="ingredients-container" >{ links }</ul>
    }
    return <p>No Ingredients</p>
}

export default IngredientsContainer