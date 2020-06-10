DROP DATABASE IF EXISTS pantry_party;
CREATE DATABASE pantry_party;
\c pantry_party;

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    firstname VARCHAR, 
    lastname VARCHAR, 
    email VARCHAR, 
    username VARCHAR, 
    password VARCHAR, 
    avatar VARCHAR, 
    bio VARCHAR, 
    history VARCHAR, 
    active BOOLEAN 
);

CREATE TABLE followers (
    id SERIAL PRIMARY KEY, 
    followed_id INT REFERENCES users(id),
    follower_id INT REFERENCES users(id)
);

CREATE TABLE recipes (
    id SERIAL PRIMARY KEY, 
    user_id INT REFERENCES users(id),
    recipe_name VARCHAR, 
    directions VARCHAR,
    recipe_img VARCHAR,
    recipe_active BOOLEAN DEFAULT TRUE,
    recipe_public BOOLEAN DEFAULT TRUE
);

CREATE TABLE hashtags (
    id SERIAL PRIMARY KEY,
    tag_body VARCHAR,
    recipe_id INT REFERENCES recipes(id)
);

CREATE TABLE ingredients (
    id SERIAL PRIMARY KEY,
    ingredient_name VARCHAR,
    amount VARCHAR,
    measurement VARCHAR,
    recipe_id INT REFERENCES recipes(id)
);

CREATE TABLE events (
    id SERIAL PRIMARY KEY, 
    user_id INT REFERENCES users(id), 
    event_name VARCHAR, 
    event_date DATE, 
    event_description VARCHAR,
    recipe_id INT REFERENCES recipes(id),
    active BOOLEAN DEFAULT FALSE,
    broadcast_id VARCHAR DEFAULT NULL
);

CREATE TABLE notifications (
    id SERIAL PRIMARY KEY, 
    user_id INT REFERENCES users(id),
    event_id INT REFERENCES events(id), 
    recipe_id INT REFERENCES recipes(id),
    follower_id INT REFERENCES followers(id),
    status VARCHAR
);

-- SEED DATA

INSERT INTO users (firstname, lastname, email, username, password)
    VALUES ('Suzette', 'Islam', 'suzette@gmail.com', 'Suzette!', '123ok'), 
            ('Maliq', 'Taylor', 'maliq@gmail.com', 'PowerHouse93', 'ok123'),
            ('Douglas', 'MacKrell', 'douglas@gmail.com', 'DouglasMacKrell', 'ok123');


INSERT INTO followers (followed_id, follower_id)
    VALUES( 1,2),
        (1,3),
        (2,1),
        (2,3),
        (3,1),
        (3,2);

INSERT INTO recipes (user_id, recipe_name, directions, recipe_img, recipe_active, recipe_public)
    VALUES (1, 'Suzette''s World Famous Tomato Sauce', 'Add Olive Oil to large soup pot and heat to shimmering,Add garlic oregano and red pepper flakes and cook for one minute,Add the diced onion to the pot and cook for 5 minutes or until soft and translucent,Add the tomato paste and cook for 3 - 5 minutes more making sure not to burn the paste by adding a little more olive oil if needed,Add in the cans of whole and crushed tomatoes taking time to break up the whole tomatoes with a potato masher or fork,Bring to a boil then drop the heat to low and cover. Cook for 1 hour (or longer for a deeper taste) stirring occationally,Remove from the heat and add the butter. Stir the sauce until the butter melts', 'https://www.simplyrecipes.com/wp-content/uploads/2007/01/basic-tomato-sauce-horiz-a-1200.jpg', true, true),
        (2, 'Maliq''s Chili Mac N'' Cheese', 'Heat olive oil in a large skillet over medium heat. Add onion bell pepper and garlic and cook until softened. Add chili powder cumin and cayenne until fragrant ~1 minute. Add ground beef and cook until browned.,Transfer beef mixture to slow cooker along with tomatoes/kidney beans/and beef broth and season generously with salt and pepper. Cover and cook on high for 4 to 6 hours or low for 8 to 10 hours.,When ready stir in dry pasta and cook on high for 15 minutes more. When pasta is tender stir in cheeses until evenly distributed and melted. Garnish with scallions and serve.', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/7/28/2/YW0812H_chili-mac_s4x3.jpg.rend.hgtvcom.826.620.suffix/1479258280675.jpeg', true, true),
        (3, 'Doug''s Five Alarm Buffalo Chicken Stuffed Peppers', 'Preheat oven to 400°. Place bell peppers cut side up on a large baking sheet and drizzle all over with olive oil. Then season with salt and pepper.,In a large skillet over medium heat melt butter. Add onion and cook until tender - about 5 minutes. Add garlic and cook until fragrant - 1 minute more.,Add shredded chicken and hot sauce and toss until combined. Cook until the mixture comes to a simmer then remove from heat.,Divide chicken mixture between pepper halves. Top with Gouda and bake until cheese is melted and peppers are crisp-tender - 20 to 25 minutes.,Drizzle each stuffed pepper with ranch dressing and sprinkle with chives.', 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/12/480x719/gallery-1490387803-delish-buffalo-chicken-stuffed-peppers-pin3.jpg?resize=768:*', true, true),
        (1, 'Big Top Brownies', 'Prepare your baking dish by lining with aluminum foil or parchment paper and greasing with cooking spray.,In a large bowl combine cocoa powder/espresso powder/chopped unsweetened chocolate and boiling water. Stir to combine and get everything melted.,While still warm add butter and stir until melted. Add vegetable oil and stir again.,Once the mixture has cooled add the eggs and egg yolks and stir to combine.,Add vanilla extract and whisk then add granulated sugar and stir to combine.,Next add the flour. Mix it thoroughly and then add the chopped bittersweet chocolate. Stir to combine one last time.,Pour batter into prepared pan. Bake at 350°F for 30-35 minutes or until a tester comes out clean-ish.,Let brownies cool for one hour in the pan.,Remove them from pan using parchment or foil. Serve and enjoy!', 'https://www.seriouseats.com/2018/03/20180413-brownie-mix-vicky-wasik-20.jpg', true, true),
        (1, 'Cheeseburger Tomatoes', 'In a medium skillet over medium heat - heat oil. Add onion and cook until tender - about 5 minutes. Then stir in garlic. Add ground beef - breaking up the meat with a wooden spoon and cook until the beef is no longer pink - about 6 minutes. Drain fat. Season with salt and pepper. Then stir in ketchup and mustard.,Flip tomatoes so they are stem-side down. Cut the tomatoes into six wedges being careful to not cut completely through the tomato. Carefully spread open the wedges. Divide cooked ground beef evenly among the tomatoes then top each with cheese and lettuce.,Garnish with pickle coins and sesame seeds.', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-cheeseburger-tomatoes-still003-1528897335.jpg?crop=0.929xw:0.938xh;0.0329xw,0.0400xh&resize=768:*', true, true),
        (1, 'Out Of This World Gummis', 'Pour 1/2 cup of cold water and add 1/4 of a cup of Karo syrup and stir until blended,Pour into small pot and add 2 packets of Gelatin and 1 packet Jello - stirring until clear and smooth,Turn stove to medium low and cook for 5-10 minutes (closer to 5) stunning every minute or two to keep from burning,Pour carefully into ice cube moulds and refrigerate', 'https://howtodetoxyourlife.ca/wp-content/uploads/2018/02/gummies.jpg', true, true),
        (1, 'Deep Dish Cauliflower Pizza', 'Preheat oven to 425º and grease a cast-iron skillet with cooking spray. In a large bowl combine cauliflower/1 cup mozzarella/eggs/1/2 cup Parmesan/and garlic powder and season with salt and pepper.,Press mixture into skillet making sure to get up the sides and bake until deeply golden and dry - 25 minutes.,Spoon a thin layer of pizza sauce over crust and sprinkle with remaining mozzarella and Parmesan. Top with mini pepperoni and bake 5 minutes more.,Sprinkle with basil. Slice and serve.', 'https://i0.wp.com/www.flavcity.com/wp-content/uploads/2019/04/cauliflower-pizza-crust-7.jpg?w=850&ssl=1', true, true);

INSERT INTO hashtags (tag_body, recipe_id)
    VALUES ('Tomato', 1),
        ('Tomato Sauce', 1),
        ('Italy', 1),
        ('Mac N Cheese', 2),
        ('Macaroni And Cheese', 2),
        ('Comfort Food', 2),
        ('Spicy', 3),
        ('Chicken', 3),
        ('Fast Meals', 3),
        ('Brownies', 4),
        ('Chocolate', 4),
        ('Chewy', 4),
        ('Cheeseburger', 5),
        ('Healthy', 5),
        ('Tomato', 5),
        ('Gummi', 6),
        ('Gummy', 6),
        ('Homemade', 6),
        ('Pizza', 7),
        ('Cauliflower', 7),
        ('Pepperoni', 7);

INSERT INTO ingredients (ingredient_name, amount, measurement, recipe_id)
    VALUES ('Crushed Tomatoes', '2', '48oz Cans', 1),
        ('Whole San Marzano Tomatoes', '1', '48oz Can', 1),
        ('Diced Yellow Onion', '1', 'Large', 1),
        ('Oregano', '2', 'Tablespoons', 1),
        ('Red Pepper Flakes', '2', 'Tablespoons', 1),
        ('Unsalted Butter', '1/2', 'Stick', 1),
        ('Tomato Paste', '1', '4oz Can', 1),
        ('Minced Garlic', '3', 'Cloves or Tablespoons', 1),
        ('olive oil', '1', 'tbsp', 2),
        ('onion, diced', '1', 'medium', 2),
        ('red bell pepper, diced', '1', 'large', 2),
        ('garlic, minced', '3', 'cloves', 2),
        ('chili powder', '2', 'tsp', 2),
        ('ground cumin', '1', 'tbsp', 2),
        ('cayenne', '1', 'tbsp', 2),
        ('ground beef', '2', 'lbs', 2),
        ('crushed tomatoes', '2', '28oz Cans', 2),
        ('kidney beans, drained', '1', '15oz can', 2),
        ('beef broth', '2', 'cups', 2),
        ('salt', '2-3', 'pinches', 2),
        ('black pepper', '2-3', 'pinches', 2),
        ('pasta', '8', 'oz', 2),
        ('cheddar, shredded', '1 1/2', 'cups', 2),
        ('monterey jack cheese shredded', '1 1/2', 'cups', 2),
        ('scallions', '1/4', 'cup', 2),
        ('Bell Peppers', '4', 'Large', 3),
        ('Olive Oil', '1', 'tbsp', 3),
        ('Salt', '1-2', 'shakes', 3),
        ('Black Pepper', '3-4', 'grinds', 3),
        ('Butter', '3', 'tbsp', 3),
        ('Onion', '1/2', 'Large', 3),
        ('Garlic', '2', 'cloves', 3),
        ('Rotisserie Chicken', '3', 'Cups', 3),
        ('Frank''s Red Hot', '1/2', 'Cup', 3),
        ('Gouda', '1/2', 'cup', 3),
        ('Ranch Dressing', '3', 'tbsp', 3),
        ('Chives', '2', 'tbsp', 3),
        ('Cocoa Powder', '1/3', 'cup', 4),
        ('Espresso Powder', '1 1/2', 'tsp', 4),
        ('Unsweetened Chocolate', '2', 'oz', 4),
        ('Boiling Water', '1/2', 'cup', 4),
        ('Butter', '4', 'tbsp', 4),
        ('Vegetable Oil', '1/2', 'cup', 4),
        ('Eggs', '2', 'large', 4),
        ('Egg Yolks', '2', 'large', 4),
        ('Vanilla Extract', '1 1/2', 'tsp', 4),
        ('Granulated Sugar', '2 1/2', 'cups', 4),
        ('Flour', '1 3/4', 'cups', 4),
        ('Bittersweet Chocolate', '6', 'oz', 4),
        ('Olive Oil', '1', 'tbsp', 5),
        ('Onion', '1', 'medium', 5),
        ('Garlic', '2', 'cloves', 5),
        ('Ground Beef', '1', 'lb', 5),
        ('Ketchup', '1', 'tbsp', 5),
        ('Yellow Mustard', '1', 'tbsp', 5),
        ('Tomatoes', '4', 'whole', 5),
        ('Kosher Salt', '4', 'shakes', 5),
        ('Ground Pepper', '4', 'shakes', 5),
        ('Shredded Cheddar', '2/3', 'cup', 5),
        ('Iceburg Lettuce', '1/2', 'cup', 5),
        ('Pickles', '4', 'coins', 5),
        ('Sesame Seeds', '1-2', 'shakes', 5),
        ('Karo Syrup', '1/4', 'cup', 6),
        ('Gelatin', '2', 'packets', 6),
        ('Jello', '1', 'packet', 6),
        ('Water', '1/2', 'cup', 6),
        ('Sugar', '1/4', 'cup', 6),
        ('Cauliflower', '1', 'large', 7),
        ('Shredded Mozzarella', '2 1/2', 'cups', 7),
        ('Eggs', '2', 'large', 7),
        ('Parmesan', '1', 'cup', 7),
        ('Garlic Powder', '1', 'tbsp', 7),
        ('Salt', '3', 'shakes', 7),
        ('Pepper', '3', 'shakes', 7),
        ('Pizza Sauce', '2', 'tbsp', 7),
        ('Pepperoni', '15', 'slices', 7),
        ('Basi', '3-4', 'leafs', 7);

INSERT INTO events (event_name, user_id, event_date, event_description, recipe_id, active, broadcast_id)
    VALUES ('hey', 1, '2020-04-04', 'cooking with friends', 1, true, '1234'), 
        ('why', 2, '2020-03-04', 'cooking with friends', 2, true, '2345'),
        ('omg', 3, '2020-01-04', 'cooking with parents', 3, true, '3456'),
        ('no', 1, '2020-03-04', 'cooking with friends', 1, false, null), 
        ('hey', 2, '2020-02-04', 'cooking with friends', 2, false, null);

-- TESTS

SELECT * FROM users;
SELECT * FROM events;
SELECT * FROM followers;
SELECT * FROM recipes;
SELECT * FROM hashtags;
SELECT * FROM ingredients;