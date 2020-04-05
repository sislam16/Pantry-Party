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

CREATE TABLE friends (
    id SERIAL PRIMARY KEY, 
    user_id INT REFERENCES users(id), 
    friend_id INT REFERENCES users(id)
);

CREATE TABLE groups (
    id SERIAL PRIMARY KEY,
    group_name VARCHAR,
    group_description VARCHAR, 
    group_avatar VARCHAR, 
    host_id INT REFERENCES users(id) 
);

CREATE TABLE group_affiliation (
    id SERIAL PRIMARY KEY, 
    user_id INT REFERENCES users(id), 
    group_id INT REFERENCES groups(id)
);

CREATE TABLE pantry (
    id SERIAL PRIMARY KEY, 
    user_id INT REFERENCES users(id), 
);

CREATE TABLE pantryitem (
    id SERIAL PRIMARY KEY,
    pantry_id INT REFERENCES pantry(id),
    item_name VARCHAR, 
    expiration_date DATE,
    volume INT
);

CREATE TABLE calendar (
    id SERIAL PRIMARY KEY, 
    user_id INT REFERENCES users(id),  
);

CREATE TABLE pantry_party (
    id SERIAL PRIMARY KEY, 
    group INT REFERENCES event_group(id),
    party_name VARCHAR, 
    party_date REFERENCES calendar(date),
    party_description VARCHAR,
    recipe_info INT REFERENCES recipes(id)
);

CREATE TABLE notifications (
    id SERIAL PRIMARY KEY, 
    group_id INT REFERENCES groups(id),
    pantry_item_id INT REFERENCES pantryitem(id), 
    status INT, 
    user_id INT REFERENCES users(id),
    party_id INT REFERENCES pantry_party(id), 
    friend_id INT REFERENCES users(id)
);

CREATE TABLE grocerylist (
    id SERIAL PRIMARY KEY, 
    user_id INT REFERENCES users(id), 
    item_name VARCHAR, 
    party_id INT REFERENCES pantry_party(id),
); 


INSERT INTO users (firstname, lastname, email, password)
    VALUES ('Suzette', 'Islam', 'suzette@gmail.com', '123ok'), 
            ('Maliq', 'Taylor', 'maliq@gmail.com', 'ok123'),
            ('Douglas', 'MacKrell', 'douglas@gmail.com', 'ok123');

INSERT INTO pantry (name, category, expiration_date)
    VALUES ('rice', 'grain', '2021-01-01'),
            ('quinoa', 'grain', '2021-01-01'),
            ('tuna', 'seafood', '2021-01-01');
