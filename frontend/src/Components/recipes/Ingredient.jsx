import React from "react"

const Ingredient = ({ ingredient }) => {
    let name = ingredient.ingredient_name;
    let amount = ingredient.amount;
    let measurement = ingredient.measurement;

    return <li>{amount} {measurement} {name}</li>
}

export default Ingredient;