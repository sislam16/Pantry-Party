/*
Recipes Route | Server | Tost-Host/Pantry Party Web App
GROUP 7: Suzette Islam, Douglas MacKrell, Maliq Taylor
*/

let express = require('express');
let router = express.Router();
let recipesQueries = require('../queries/recipes')


/* ROUTE HANDLES */

// getRecipeById: get a single recipe by recipe ID.
router.get("/api/recipe/:recipe_id", async (req, res, next) => {
    try {
        const recipeId = req.params.recipe_id
        const recipe = await recipesQueries.getRecipeById(recipeId);
        console.log(recipe)
        res.json({
            status: "success",
            message: `Recipe ${recipeId} retrieved`,
            payload: recipe
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

// allRecipesByUser: get all of a single user's recipes.
router.get("/api/user/:user_id", async (req, res, next) => {
    try {
        const userId = req.params.user_id
        const allRecipesByUser = await recipesQueries.getAllRecipesByUserId(userId);
        res.json({
            status: "success",
            message: `All recipes of user ${userId} retrieved`,
            payload: allRecipesByUser
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



module.exports = router;