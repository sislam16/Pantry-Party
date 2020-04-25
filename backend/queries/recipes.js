/*
Recipes Queries | Server | Tost-Host/Pantry Party Web App
GROUP 7: Suzette Islam, Douglas MacKrell, Maliq Taylor
*/

// DATABASE CONNECTION
const db = require('../database/db')

//GET
const getRecipeById = async (id) => {
    return await db.one('SELECT * FROM recipes WHERE id=$1', id)
}

//GET 
const getAllRecipesByUserId = async (userId) => {
    const getQuery = `SELECT * FROM recipes WHERE user_id = $1;`;
    let recipes =  await db.any(getQuery, [userId]);
    return recipes
}

//POST
const createRecipe = async (bodyObj) => {
    const postQuery = `
        INSERT INTO recipes (
            user_id,
            recipe_name,
            directions,
            recipe_img,
            recipe_active,
            recipe_public
        ) VALUES ($1, $2, $3, $4, $5, $6);`;
  
    let recipe = await db.none(postQuery, [bodyObj.user_id, bodyObj.recipe_name, bodyObj.directions, bodyObj.recipe_img, bodyObj.recipe_active, bodyObj.recipe_public]);
  
    return recipe
}

//PATCH
const rewriteRecipe = async (id, recipe_name, directions, recipe_img, recipe_active, recipe_public) => {
    // const updateQuery = `
    // UPDATE recipes
    // SET recipe_name = $2,
    // directions = $3,
    // recipe_img = $4,
    // recipe_active = $5,
    // recipe_public = $6
    // WHERE id = $1
    // `
    
    // return await db.one(updateQuery, [id, recipe_name, directions, recipe_img, recipe_active, recipe_public])
    try {
      let query  
      const patchQuery = `UPDATE recipes SET `
      if (recipe_name) {
          query += `recipe_name = ${recipe_name},`
      }
      if (directions) {
          query += `directions = ${directions},`
      }
      if (recipe_img) {
          query += `recipe_img = ${recipe_img},`
      }
      if (recipe_active) {
          query += `recipe_active = ${recipe_active},`
      }
      if (recipe_public) {
          query += `recipe_public = ${recipe_public},`
      }

    //   query = query.slice(0, query.length - 1);

      query += ` WHERE id = ${id} RETURNING *`
      console.log(query)
      return await db.one(patchQuery, [id, recipe_name, directions, recipe_img, recipe_active, recipe_public]);
    } catch(err) {
      throw(err);
    }
}

/* EXPORT */
module.exports = {
    getRecipeById,
    getAllRecipesByUserId,
    createRecipe,
    rewriteRecipe
}

