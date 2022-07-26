const path = require("path");
const mongoose = require("mongoose");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
require("./config/passport")(passport);
const app = express();

//Database connection
const db = "mongodb+srv://sahil:zfsjoy%405mRqR@cluster0.v4uqg.mongodb.net/event-scheduler?retryWrites=true&w=majority";
mongoose.connect(db)
.then(
    () => console.log("Connected to MongoDB Atlas")
).catch(
    (e) => console.log(e)
);

const conn = mongoose.connection;

//express session
app.use
(
    session
    (
        {
            secret: "ZLYQXpMP9KifnRvE4VvS",
            resave: true,
            saveUninitialized: true
        }
    )
);

//passport
app.use(passport.initialize());
app.use(passport.session());

//Connection to port
const PORT = process.env.PORT || 6969;
app.listen
(
    PORT,
    (err) =>{
        if(err)
            throw err;
        console.log(`Server started on PORT ${PORT}...`);
    }
);