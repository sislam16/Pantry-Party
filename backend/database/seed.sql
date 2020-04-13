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

CREATE TABLE calendar (
    id SERIAL PRIMARY KEY, 
    user_id INT REFERENCES users(id), 
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

CREATE TABLE event (
    id SERIAL PRIMARY KEY, 
    party_name VARCHAR, 
    calendar_id REFERENCES calendar(id),
    event_description VARCHAR,
    recipe_info INT REFERENCES recipes(id)
);

CREATE TABLE notifications (
    id SERIAL PRIMARY KEY, 
    user_id INT REFERENCES users(id),
    event_id INT REFERENCES event(id), 
    recipe_id INT REFERENCES recipe(id),
    follower INT REFERENCES followers(follower_id),
    status VARCHAR,
);


INSERT INTO users (firstname, lastname, email, password)
    VALUES ('Suzette', 'Islam', 'suzette@gmail.com', '123ok'), 
            ('Maliq', 'Taylor', 'maliq@gmail.com', 'ok123'),
            ('Douglas', 'MacKrell', 'douglas@gmail.com', 'ok123');

INSERT INTO pantry (name, category, expiration_date)
    VALUES ('rice', 'grain', '2021-01-01'),
            ('quinoa', 'grain', '2021-01-01'),
            ('tuna', 'seafood', '2021-01-01');
