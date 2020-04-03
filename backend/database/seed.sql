DROP DATABASE IF EXISTS pantry_party;
CREATE DATABASE pantry_party;
\c pantry_party;

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    firstname VARCHAR, 
    lastname VARCHAR, 
    email VARCHAR, 
    password VARCHAR, 
    user_avi VARCHAR, 
    user_bio VARCHAR, 
    history VARCHAR 
);

CREATE TABLE pantry (
    id SERIAL PRIMARY KEY, 
    name VARCHAR, 
    category VARCHAR, 
    expiration_date DATE
);

CREATE TABLE shoppinglist (
    id SERIAL PRIMARY KEY, 
    food_item INT REFERENCES pantry(id), 
    food_name VARCHAR REFERENCES pantry(name)
); 

CREATE TABLE calendar (
    id SERIAL PRIMARY KEY, 
    user_id INT REFERENCES users(id), 
    event_date DATE 
);

CREATE TABLE recipes (
    id SERIAL PRIMARY KEY, 
    recipe_name VARCHAR, 
    ingredients TEXT [], 
    directions VARCHAR
);
 
CREATE TABLE groups (
    id SERIAL PRIMARY KEY,
    group_name VARCHAR,
    group_members ARRAY 
);

CREATE TABLE event_group (
    id SERIAL PRIMARY KEY, 
    host_id INT REFERENCES users(id),
    group_members 
);

CREATE TABLE pantry_party (
    id SERIAL PRIMARY KEY, 
    group INT REFERENCES event_group(id),
    party_name VARCHAR, 
    party_date REFERENCES calendar(date),
    party_description VARCHAR,
    recipe_info INT REFERENCES recipes(id)
);


INSERT INTO users (firstname, lastname, email, password)
    VALUES ('Suzette', 'Islam', 'suzette@gmail.com', '123ok'), 
            ('Maliq', 'Taylor', 'maliq@gmail.com', 'ok123'),
            ('Douglas', 'MacKrell', 'douglas@gmail.com', 'ok123');

INSERT INTO pantry (name, category, expiration_date)
    VALUES ('rice', 'grain', '2021-01-01'),
            ('quinoa', 'grain', '2021-01-01'),
            ('tuna', 'seafood', '2021-01-01');

INSERT INTO recipes(name, ingredients, direction)
    VALUES ('Nachos', ARRAY['tortilla chips', 'sourcream', 'jalapeños', 'pico'], 'lay the tortilla chips down first and place all of the ingredients on top but keep in mind to distribute thorougly' );
