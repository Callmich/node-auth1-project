const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

//Set Routers 
const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');
const loginRouter = require('../login/login-router.js');

//Set Middleware Authenticator
const authenticator = require("../auth/authenticator.js")

const server = express();

//set sessionConfig

const sessionConfig ={
    name: "Callahan",
    secret: process.env.SESSION_SECRET || "password_is_a_bad_password",
    resave: false,
    saveUninitialized: process.env.SEND_COOKIES || true,
    cookie: {
        maxAge: 1000 * 30, // good for 30 secs.
        secure: process.env.USE_SECURE_COOKIES || false, // used over https only, set to true in production
        httpOnly: true, // true means JS on the client cannot access the cooke
    }
}


server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));

server.use("/api/users", authenticator, usersRouter);
server.use("/api/auth", authRouter)
server.use("/api/login", loginRouter)

server.get("/", (req, res) =>{
    res.status(200).json({message: `The Server is Up and Running!!!!`})
})

module.exports = server;