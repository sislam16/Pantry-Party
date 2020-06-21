# Pantry Party
Pantry Party is an interactive live streaming platform where users are able to connect with others by hosting a virtual cooking party. Users will have the option to find random recipes and create recipes for their cookbook that allow them to begin a stream. Once a stream is initialized by a broadcaster, they are able to cook live and display the directions to their recipes as they go to the public. With this live virtual interaction, users are able to cook a meal with friends while they are physically apart. 

## Database Schema 
![database](./assets/database_schemaG7.png)

## Backend Routes/API
* __Auth__
  | Method | Endpoint  | Description    | Body Data    |
  |--------|-----------|----------------|--------------|
  |GET| `/auth/logout`| Logs out current user.|N/A|
  |POST| `/auth/signup`| Sign up new user.| firstname, lastname, email, username, password, avatar, bio|
  |POST| `/auth/login`| Logs in existing user.|username, password|
  

* __Users__
  | Method | Endpoint  | Description    | Body Data    |
  |--------|-----------|----------------|--------------|
  |GET| `/api/users`| Retrieves all users.| N/A|
  |GET| `/api/users//id/:id`| Get a single user by id.| N/A|
  |GET| `/api/users/username`| Gets user by username.|N/A|
  |PATCH| `/api/users/update/info`| Update single user.|id, username, firstname, lastname, avatar, bio, active|
  |PATCH| `/api/users/update/password/:id`| Update single user's password.|id, password|

* __Recipes__
  | Method | Endpoint  | Description    | Body Data    |
  |--------|-----------|----------------|--------------|
  |GET| `/api/recipes/:recipe_id`| Gets single recipe in users database.| N/A|
  |GET| `/api/recipes/user/:user_id`| Gets all recipes by user.| N/A|
  |POST| `/api/recipes/new`| Create new recipe.| recipe_name, directions, recipe_img, recipe_active, recipe_public ingredients, hashtags|
  |PATCH| `/api/recipes/update/:recipe_id`| Update single recipe.| recipe_name, directions, recipe_img, recipe_active, recipe_public, ingredients, ingredients, hashtags|
 
* __Ingredients__
  | Method | Endpoint  | Description    | Body Data    |
  |--------|-----------|----------------|--------------|
  |GET |`/api/ingredients/:recipe_id`| Gets all ingredients by recipe_id.|N/A|
  |POST|`/api/ingredients/:recipe_id`| Create new ingredient.|ingredient_name, amount, measurement, recipe_id|
  |PATCH| `/api/ingredients/:ingredient_id`| Update single ingredient.|ingredient_name, amount, measurement|

* __Hashtags__
  | Method | Endpoint  | Description    | Body Data    |
  |--------|-----------|----------------|--------------|
  |GET |`/api/hashtags/:recipe_id`| Gets all hashtags by recipe_id.|N/A|
  |POST|`/api/hashtags/:recipe_id`| Create new hashtag.|tag_body, recipe_id|
  |PATCH| `/api/hashtags/:hashtag_id`| Update single hashtag.|tag_body recipe_id|

* __Events__
  | Method | Endpoint  | Description    | Body Data    |
  |--------|-----------|----------------|--------------|
  |GET |`/api/events/`| Gets all events in database.|N/A|
  |GET |`/api/events/active`| Gets all active events.|N/A|
  |GET | `/api/events/:event_id`| Get single event by event id. | N/A|
  |GET |`/api/events/user/:user_id`| Gets all events by user id.|N/A|
  |POST|`/api/events/new`| Create new event.|party_name, calendar_id, party_description, recipe_id|
  |PATCH| `/api/events/update/:event_id`| Update single event.|event_name, event_date, event_description, recipe_id|
  |DELETE| `/api/events/remove`| Delete single event.| N/A|


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

## Technical Milestones
* WebRTC and Websockets
* Distribution of data to multiple tables with one call
* Material-UI

## Future Implementations
* Explore Page
* Live Text Chat
* Followers
* Saving public recipes to Cookbook

### Wireframes
Find wireframes [here](./assets/wireframes.md).
