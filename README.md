# socialSync API
<p align="center">
    <img src="https://github.com/diegorramos84/socialSync-BE/assets/17050237/5a2b3389-7709-4265-a642-2dc40d7bb93d">
</p

## Description

This is the backend of the socialSync project developed during the Lap 2 of the LFA training - Avgerou Virtual cohort

The objective of this project is to build a platform for people living in the same area where they can share local events, look for help or discuss local issues

## Installation

1. clone this repo
```bash
git clone git@github.com:diegorramos84/socialSync-BE.git
```
2. navigate to the app folder
```bash
cd diegorramos84/socialSync-BE
```
3. install the packages
```bash
npm install
```
4. in the app root folder, create and add the following to your .env file
```bash
# create file
touch .env

# add DB_URL link (postgress)
DB_URL: postgress://yourlink

# add PORT
PORT: 3000

# add BCRYPT_SALT_ROUNDS
BCRYPT_SALT_ROUNDS=10
```
5. run the setup-db script to get your database ready
```js
npm run setup-db
```
6. start the server
```js
npm run start

# or for development (auto server refreshes)

npm run dev
```

## Usage

With the server running, you can know interact with the API using a platform like Postman
    
1. Users Endpoint
```js
# create user
POST http://localhost:3000/users/register
{
 "username":  "username",
 "password": "password"
}

# login
POST http://localhost:3000/users/login
 {
  "username":  "username",
  "password": "password"
 }
```
2. Events Endpoint
```js
# Get all events
GET http://localhost:3000/events

# Get one event by id
GET http://localhost:3000/events/:id

# Create new event
POST http://localhost:3000/events
{
    "category_name": "Issues",
    "event_name": "test",
    "about": "testing this",
    "place": "Brazil",
    "category_name": "Other",
    "event_date": "2023-05-04T11:36",
    "token": "yourtoken"
}

# Search events
GET http://localhost:3000/events/search/:query

:query => word you are looking for

e.g.:

GET http://localhost:3000/events/search/issues

[
    {
        "id": 2,
        "category_name": "Issues",
        "event_name": "Second Entry",
        "about": "An issue found on Tuesday",
        "place": "London",
        "even_date": "2023-05-11T10:56:40.997Z",
        "userId": 1,
        "creator": "admin"
    }
]

```
## Credits

This project was done by myself, (Becky)[https://github.com/Beckibuzz93] and Daniel

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.
