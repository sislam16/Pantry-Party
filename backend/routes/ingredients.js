/*
Ingredients Route | Server | Tost-Host/Pantry Party Web App
GROUP 7: Suzette Islam, Douglas MacKrell, Maliq Taylor
*/

let express = require('express');
let router = express.Router();
let ingredientsQueries = require('../queries/ingredients')

/* ROUTE HANDLES */

// getIngredientsByRecipeId: Get all ingredients by recipe ID.
router.get("/:recipe_id", async (req, res, next) => {
    try {
        const recipeId = req.params.recipe_id
        const ingredients = await recipesQueries.getIngredientsByRecipeId(recipeId);
        console.log(ingredients)
        res.json({
            status: "success",
            message: `Ingredients for Recipe #${recipeId} retrieved!`,
            payload: ingredients
        });
    } catch (err) {
        res.json({
            status: "failure",
            message: "Oops! All Errors!!",
            payload: null
        })
        throw err;
    }
});

// createIngredient: Create a new ingredient
router.post("/:recipe_id", async (req, res, next) => {
    try {
        const recipe_id = req.params.recipe_id;
        const ingredient_name = req.body.ingredient_name;
        const amount = req.body.amount;
        const measurement = req.body.measurement;
        const response = await recipesQueries.createIngredient({
            ingredient_name,
            amount,
            measurement,
            recipe_id
        });
        res.json({
            status: "success",
            message: `New ingredient, ${ingredient_name} created!`,
            payload: response
        });
    } catch (err) {
        res.json({
            status: "failure",
            message: "Oops! All Errors!",
            payload: null
        })
        throw err;
    }
});

//  rewriteIngredient: edit a recipe by recipe_id
router.patch("/api/edit/:recipe_id", async (req, res, next) => {
    const id = req.params.recipe_id;
    try {
        const editedRecipe = await recipesQueries.rewriteRecipe({
            id,
            ...req.body
        })
        res.json({
            status: `Successfully edited recipe ${id}`,
            payload: editedRecipe,
            error: null
        })

    } catch (err) {
        res.status(500).json({
            status: "failure",
            message: "Oops! All Errors!",
            payload: null
        })
        throw err;
    }
});


module.exports = router;