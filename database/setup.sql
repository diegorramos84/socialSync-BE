DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS token;
DROP TABLE IF EXISTS users;

-- Users
CREATE TABLE users (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(30) UNIQUE NOT NULL,
    password CHAR(60) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE token (
    token_id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    token CHAR(36) UNIQUE NOT NULL,
    PRIMARY KEY (token_id),
    FOREIGN KEY (user_id) REFERENCES users("user_id")
);

-- Events
CREATE TABLE categories (
    category_id INT GENERATED ALWAYS AS IDENTITY,
    category_name VARCHAR(100) UNIQUE,
    category_description VARCHAR(500),
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


INSERT INTO users (username, password)
VALUES ('admin', 'admin'),
('user', '12345');

INSERT INTO categories (category_name, category_description)
VALUES ('enviroment', 'anything related to improve the environment'),
('issues', 'use this category to report problems'),
('looking for work/help', 'use this category if you are looking for work or someone to help you'),
('countryside', 'anything related to countryside'),
('library', 'discuss library related topics'),
('general', 'generic category');

INSERT INTO events (event_name, about, place, user_id, category_id)
VALUES ('First Entry', 'An event on Monday', 'London', 2, 6),
('Second Entry', 'An issue found on Tuesday', 'London', 2, 2),
('Third Entry', 'Join Wednesday clean-up day', 'London', 2, 3),
('Fourth Entry', 'Volunteer at the library', 'London', 2, 5);
