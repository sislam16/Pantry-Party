/*
Recipes Route | Server | Tost-Host/Pantry Party Web App
GROUP 7: Suzette Islam, Douglas MacKrell, Maliq Taylor
*/

var express = require('express');
var router = express.Router();

/* ROUTE HANDLES */
//    getRecipeById: get a single recipe by recipe ID.
router.get("/api/:recipe_id", async (req, res, next) => {
    try {
        const recipeId = req.params.recipe_id
        const recipe = await getRecipeById(recipeId);
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

module.exports = router;