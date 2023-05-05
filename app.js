const express = require('express');
const cors = require('cors');

// const postRouter = require('./routers/events');
// const userRouter = require('./routers/users');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        name: "SocialSync",
        description: "View and post events in your local community"
    })
})

// app.use("/posts", postRouter);
// app.use("/users", userRouter);

module.exports = app;
