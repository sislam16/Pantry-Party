# Pantry-Party
Our application allows users to host a virtual cooking party. Users will have the option to find recipes and follow an interactactive cooking video for recipes or input their personal recipe and follow the directions on a streaming platform. Pantry Party allows users to virtually interact with others and cook a meal in the comfort of their home - giving them the ability to share a meal together while apart.

## Database Schema 
![database](./assets/database_schemaG7.png)

## Backend Routes/API
* __Users__
  | Method | Endpoint  | Description    | Body Data    |
  |--------|-----------|----------------|--------------|
  |GET| `/users`| Gets all of the users.| N/A|
  |GET| `/users/:id`| Get a single user by id.| N/A|
  |POST| `/users/new`| Creates new user.| firstname, lastname, email, password, avatar, bio, active|
  |PATCH| `/users/update/:id`| Update single user.|firstname, lastname, email, password, avatar, bio, active|
  |DELETE| `/users/remove/:id`| Delete single user.|N/A|

* __Recipes__
  | Method | Endpoint  | Description    | Body Data    |
  |--------|-----------|----------------|--------------|
  |GET| `/recipe/:recipe_id`| Gets single recipe in users database.| N/A|
  |GET| `/recipe/search/:recipe_type`| Get single recipe by type of dish.| N/A|
  |GET| `/recipe/search/:ingredient`| Get single recipe by ingredient.| N/A|
  |GET | `/recipe/search/:location`| Get single recipe by location of origin.| N/A|
  |POST| `/recipe/new`| Create new recipe.| recipe_name, directions, recipe_img, ingredients, location, type|
  |PATCH| `/recipe/update/:recipe_id`| Update single recipe.| recipe_name, directions, recipe_img, ingredients, location, type|
  
* __Events__
  | Method | Endpoint  | Description    | Body Data    |
  |--------|-----------|----------------|--------------|
  |GET |`/event/all/:calendar_id`| Gets all event for user.|N/A|
  |GET | `/event/:event_id`| Get single event. | N/A|
  |POST|`/event/new/:calendar_id`| Create new event.|party_name, calendar_id, party_description, recipe_id|
  |PATCH| `/event/update/:event_id`| Update single event.|party_name, calendar_id, party_description, recipe_id|
  |DELETE| `/event/remove/:event_id`| Delete single event.| N/A|


## Frontend
### Routes

* __Landing__
  | Route | Feature  |
  |--------|-----------|
  |/ | Landing page will direct you to a log in form where registered users are able to input their credentials to log in. It will also provide a link to a sign up form.|
  |/signup| User will be able to sign up for account to our application by filling out the required fields of the form.|
  |/home| Will display user dashboard.|

* __Profile__ 
  | Route | Feature  |
  |--------|-----------|
  |/profile| Displays logged in users profile.|
  |/profile/:user_id| Displays user profile of another user with their id.|

* __Recipes__ 
  | Route | Feature  |
  |--------|-----------|
  |/recipes/search| Reroutes to a new page that allows user to make a search.|
  |/recipes/add| Displays a form that allows user to input a recipe to their cookbook.|
  |/recipes/search/name/:name| Search recipe by name.
  |/recipes/search/ingredient/:ingredient| Search by ingredient.|
  |/recipes/search/hashtag/:hashtag| Search by hashtag.|
  |/recipes/search/location/:location| Search by location.|
  |recipes/update/:recipe_id| Update the recipe that user input.|

* __Cookbook__
  | Route | Feature  |
  |--------|-----------|
  |/cookbook|Get all recipe the current user has input.|
  |/cookbook/:user_id|Displays all recipes of specific user with user_id.|
  
* __Events__
  | Route | Feature  |
  |--------|-----------|
  |/events/:event_id| Displays the information for a specific event.|

* __Stream__ 
  | Route | Feature  |
  |--------|-----------|
  |/stream/:event_id|Creates stream for a specific event.|

### Wireframes
Find wireframes [here](./assets/wireframes.md).
