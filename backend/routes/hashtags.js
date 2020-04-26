/*
Hashtags Route | Server | Tost-Host/Pantry Party Web App
GROUP 7: Suzette Islam, Douglas MacKrell, Maliq Taylor
*/

let express = require('express');
let router = express.Router();
let hashtagsQueries = require('../queries/hashtags')

/* ROUTE HANDLES */

// getHashtagsByRecipeId: Get all ingredients by recipe ID.
router.get("/:recipe_id", async (req, res, next) => {
    try {
        const recipeId = req.params.recipe_id
        const ingredients = await ingredientsQueries.getAllIngredientsByRecipeId(recipeId);
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
        const response = await ingredientsQueries.createIngredient({
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
router.patch("/:ingredient_id", async (req, res, next) => {
    const id = req.params.ingredient_id;
    try {
        const editedIngredient = await ingredientsQueries.rewriteIngredient({
            id,
            ...req.body
        })
        res.json({
            status: `Successfully edited ingredient ${id}`,
            payload: editedIngredient,
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