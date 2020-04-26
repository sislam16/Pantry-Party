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
        res.status(500).json({
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
        const tag_body = req.body.tag_body;
        const response = await hashtagsQueries.createHashtag({
            tag_body,
            recipe_id
        });
        res.json({
            status: "success",
            message: `New hashtag, ${tag_body} created!`,
            payload: response
        });
    } catch (err) {
        res.status(500).json({
            status: "failure",
            message: "Oops! All Errors!",
            payload: null
        })
        throw err;
    }
});

//  rewriteHashtag: edit a hashtag by id
router.patch("/:hashtag_id", async (req, res, next) => {
    const id = req.params.hashtag_id;
    try {
        const editedHashtag = await hashtagsQueries.rewriteHashtag({
            id,
            ...req.body
        })
        res.json({
            status: `Successfully edited hashtag ${id}`,
            payload: editedHashtag,
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