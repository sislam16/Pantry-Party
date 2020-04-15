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
VALUES ('hey', '2020-04-04', 'cooking with friends', null), ('why', '2020-03-04', 'cooking with friends', null),('omg', '2020-01-04', 'cooking with parents', null),('no', '2020-03-04', 'cooking with friends', null), ('hey', '2020-02-04', 'cooking with friends', null);

INSERT INTO calendar (user_id, event_id, active)
VALUES (1, 1, true), (2, 1, true), (1, 2, true), (2, 2, true), (1, 1, true), (1, 1, true);