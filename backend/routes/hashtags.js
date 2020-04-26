/*
Hashtags Route | Server | Tost-Host/Pantry Party Web App
GROUP 7: Suzette Islam, Douglas MacKrell, Maliq Taylor
*/

let express = require('express');
let router = express.Router();
let hashtagsQueries = require('../queries/hashtags')

/* ROUTE HANDLES */

// getHashtagsByRecipeId: Get all hashtags by recipe ID.
router.get("/:recipe_id", async (req, res, next) => {
    try {
        const recipeId = req.params.recipe_id
        const hashtags = await hashtagsQueries.getAllHashtagsByRecipeId(recipeId);
        res.json({
            status: "success",
            message: `Hashtags for Recipe #${recipeId} retrieved!`,
            payload: hashtags
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

// createHashtag: Create a new hashtag
router.post("/:recipe_id", async (req, res, next) => {
    try {
        const recipe_id = req.params.recipe_id;
        const tag_body = req.body.ingredient_name;
        const response = await hashtagsQueries.createHashtag({
            tag_body,
            recipe_id
        });
        res.json({
            status: "success",
            message: `New hashtag, "${tag_body}" created!`,
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