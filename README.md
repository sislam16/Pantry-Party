# Pantry-Party
Pantry

## Database Schema
### Tables and Columns 
* __Users__
  * `id` : Integer Primary Key
* __Recipes__

* __Followers__
* __Calendar__
* __Events__
* __Notifications__

### Diagram 
![database](./capstone_g7.png)

## Backend Routes/API
* __Users__
  * GET `/users`: Gets all of the users.
  * GET `/users/:id`: Get a single user by id.
  * POST `/users/new`: Creates new user.
  * PATCH `/users/update/:id`: Update single user.
  * DELETE `/users/remove/:id`: Delete single user.

* __Recipes__
  * GET `/recipe/:recipe_id`: Gets single recipe in users database. 
  * GET `/recipe/search/:recipe_type`: Get single recipe by type of dish.
  * GET `/recipe/search/:ingredient`: Get single recipe by ingredient.
  * GET `/recipe/search/:location`: Get single recipe by location of origin.
  * POST `/recipe/new`: Create new recipe.
  * PATCH `/recipe/update/:recipe_id`: Update single recipe.
 
* __Followers__
  * GET `/followers/all/:user_id`: Gets all followers for user.
  * GET `/followers/following/all/:user_id`: Gets all accounts user is following.
  * POST `/followers/:user_id/:follower_id`: Create new follower.
  * DELETE `/followers/:user_id/:follower_id`: Delete single follow.
  
* __Calendar__
  * GET
  * 
* __Events__
  *
* __Notifications__

## Frontend
### Wireframes
