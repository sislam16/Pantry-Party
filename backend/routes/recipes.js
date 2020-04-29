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
            message: `Recipe ${recipeId} retrieved!`,
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
            message: `All recipes of user ${userId} retrieved!`,
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

// createRecipe: create a new core recipe instance
router.post("/api/new/:user_id", async (req, res, next) => {
    try {
        const user_id = req.params.user_id;
        const recipe_name = req.body.recipe_name;
        const directions = req.body.directions;
        const recipe_img = req.body.recipe_img;
        const recipe_active = req.body.recipe_active;
        const recipe_public = req.body.recipe_public;
        const response = await recipesQueries.createRecipe({
            user_id: user_id,
            recipe_name: recipe_name,
            directions: directions,
            recipe_img: recipe_img,
            recipe_active: recipe_active,
            recipe_public: recipe_public
        });
        res.json({
            status: "success",
            message: `New recipe, ${recipe_name} created!`,
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

//  rewriteRecipe: edit a recipe by recipe_id
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