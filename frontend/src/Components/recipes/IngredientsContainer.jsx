import React from "react"
import Ingredient from './Ingredient'

const IngredientsContainer = ({ ingredients }) => {
    let ingredients = []
    if (ingredients.length > 0) {
        for (let ingredient of ingredients){
            links.push(<Ingredient ingredient={ingredient} key={ingredient.id} />)
        }
        return <ul className="links-container" >{ links }</ul>
    }
    return <p>No Streams</p>
}

export default IngredientsContainer