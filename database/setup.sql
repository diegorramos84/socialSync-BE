DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS token;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(30) UNIQUE NOT NULL,
    password CHAR(60) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE categories (
    category_id INT GENERATED ALWAYS AS IDENTITY,
    category_name VARCHAR(30) UNIQUE,
    category_description VARCHAR(30),
    PRIMARY KEY (category_id)
);

CREATE TABLE events (
    event_id INT GENERATED ALWAYS AS IDENTITY,
    event_name VARCHAR (100) NOT NULL,
    about VARCHAR (500) NOT NULL,
    place VARCHAR (100) NOT NULL,
    event_time TIME DEFAULT CURRENT_TIME,
    event_date DATE DEFAULT CURRENT_DATE,
    user_id INT,
    category_id INT,
    PRIMARY KEY (event_id),
    FOREIGN KEY (user_id) REFERENCES users("user_id"),
    FOREIGN KEY (category_id) REFERENCES categories("category_id")
);

INSERT INTO events (event_name, about, place)
VALUES ('First Entry', 'An event on Monday', 'London'),
('Second Entry', 'An issue found on Tuesday', 'London'),
('Third Entry', 'Join Wednesday clean-up day', 'London'),
('Fourth Entry', 'Volunteer at the library', 'London')
;

CREATE TABLE token (
    token_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    token CHAR(36) UNIQUE NOT NULL,
    PRIMARY KEY (token_id),
    FOREIGN KEY (user_id) REFERENCES users("user_id")
);
