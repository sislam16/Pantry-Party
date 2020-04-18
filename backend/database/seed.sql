DROP DATABASE IF EXISTS pantry_party;
CREATE DATABASE pantry_party;
\c pantry_party;

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    firstname VARCHAR, 
    lastname VARCHAR, 
    email VARCHAR, 
    password VARCHAR, 
    avatar VARCHAR, 
    bio VARCHAR, 
    history VARCHAR, 
    active BOOLEAN 
);

CREATE TABLE recipes(
    id SERIAL PRIMARY KEY, 
    user_id INT REFERENCES users(id),
    recipe_name VARCHAR, 
    ingredients VARCHAR, 
    directions VARCHAR, 
    location VARCHAR,
    type VARCHAR
);

CREATE TABLE events (
    id SERIAL PRIMARY KEY, 
    event_name VARCHAR, 
    event_date DATE, 
    event_description VARCHAR,
    recipe_info INT REFERENCES recipes(id)
);

CREATE TABLE calendar (
    id SERIAL PRIMARY KEY, 
    user_id INT REFERENCES users(id), 
    event_id INT REFERENCES events(id),
    active BOOLEAN 
);

CREATE TABLE followers (
    id SERIAL PRIMARY KEY, 
    user_id INT REFERENCES users(id)
    -- follower_id INT REFERENCES users(id)
);

CREATE TABLE notifications (
    id SERIAL PRIMARY KEY, 
    user_id INT REFERENCES users(id),
    event_id INT REFERENCES events(id), 
    recipe_id INT REFERENCES recipes(id),
    follower_id INT REFERENCES followers(id),
    status VARCHAR
);


INSERT INTO users (firstname, lastname, email, password)
    VALUES ('Suzette', 'Islam', 'suzette@gmail.com', '123ok'), 
            ('Maliq', 'Taylor', 'maliq@gmail.com', 'ok123'),
            ('Douglas', 'MacKrell', 'douglas@gmail.com', 'ok123');

INSERT INTO events (event_name, event_date, event_description, recipe_info)
VALUES ('hey', '2020-04-04', 'cooking with friends', null), 
('why', '2020-03-04', 'cooking with friends', null),
('omg', '2020-01-04', 'cooking with parents', null),
('no', '2020-03-04', 'cooking with friends', null),
('hey', '2020-02-04', 'cooking with friends', null);

INSERT INTO calendar (user_id, event_id, active)
VALUES (1, 1, true), 
(2, 1, true), 
(1, 2, true), 
(2, 2, true), 
(1, 1, true), 
(1, 1, true);

INSERT INTO recipes (user_id, recipe_name, ingredients, directions, location)
VALUES (1, 'Suzette''s World Famous Tomato Sauce', '#Crushed Tomatoes, 2 48oz Cans#Whole San Marzano Tomatoes, 1 48oz Can#Diced Yellow Onion, 1 Whole#Oregano, 2 Tablespoons#Red Pepper Flakes, 2 Tablespoons#Unsalted Butter, 1/2 Stick#Minced Garlic, 2 Tablespoons#Tomato Paste, 1 Small Can#Olive Oil, 1 Tablespoon', 'STEP 1: Add Olive Oil to large soup pot and heat to shimmering\nSTEP 2: Add garlic, oregano, and red pepper flakes and cook for one minute\nSTEP 3: Add the diced onion to the pot, and cook for 5 minutes or until soft and translucent\nSTEP 4: Add the tomato paste and cook for 3 - 5 minutes more, making sure not to burn the paste by adding a little more olive oil if needed\nSTEP 5: Add in the cans of whole and crushed tomatoes, taking time to break up the whole tomatoes with a potato masher or fork\nSTEP 6: Bring to a boil, then drop the heat to low and cover. Cook for 1 hour (or longer for a deeper taste) stirring occationally\nSTEP 7: Remove from the heat, and add the butter. Stir the sauce until the butter melts', 'Italy'),
(2, 'Maliq''s Chili Mac N'' Cheese', '#1 tbsp. olive oil#1 onion, diced#1 red bell pepper, diced#3 garlic cloves, minced#2 tsp. chili powder#1 tbsp. ground cumin#1 tbsp. cayenne#2 lb. ground beef#2 28-oz. cans crushed tomatoes#1 (15 oz.) kidney beans, drained and rinsed#2 c. beef broth#kosher salt#Freshly ground black pepper#8 oz. small pasta, such as macaroni or fusilli#1 1/2 c. shredded Cheddar#1 1/2 c. shredded Monterey Jack cheese#1/4 c. Scallions, for garnish', 'STEP 1: Heat olive oil in a large skillet over medium heat. Add onion, bell pepper, and garlic and cook until softened. Add chili powder, cumin, and cayenne until fragrant, 1 minute. Add ground beef and cook until browned.\nSTEP 2: Transfer beef mixture to slow cooker along with tomatoes, kidney beans and beef broth, and season generously with salt and pepper. Cover and cook on high for 4 to 6 hours or low for 8 to 10 hours.\nSTEP 3: When ready, stir in dry pasta and cook on high for 15 minutes more. When pasta is tender stir in cheeses until evenly distributed and melted. Garnish with scallions and serve.', 'Chicago, USA'),
(3, 'Doug''s Five Alarm Buffalo Chicken Stuffed Peppers', '#4 bell peppers, halved, seeds and cores removed#1 tbsp. extra-virgin olive oil#Kosher salt#Freshly ground black pepper#3 tbsp. butter#1/2 large onion, chopped#2 cloves garlic#3 c. shredded rotisserie chicken#1/2 c. hot sauce (preferably Frank''s Red Hot)#2 c. shredded Gouda#Ranch dressing, for drizzling#2 tbsp. freshly chopped chives', 'STEP 1: Preheat oven to 400°. Place bell peppers cut side up on a large baking sheet and drizzle all over with olive oil, then season with salt and pepper.\nSTEP 2: In a large skillet over medium heat, melt butter. Add onion and cook until tender, about 5 minutes. Add garlic and cook until fragrant, 1 minute more.\nSTEP 3: Add shredded chicken and hot sauce and toss until combined. Cook until the mixture comes to a simmer, then remove from heat.\nSTEP 4: Divide chicken mixture between pepper halves. Top with Gouda and bake until cheese is melted and peppers are crisp-tender, 20 to 25 minutes.\nSTEP 5: Drizzle each stuffed pepper with ranch dressing and sprinkle with chives.', 'Buffalo, NY, USA');