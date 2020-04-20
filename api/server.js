const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

//Set Routers 
const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');
const loginRouter = require('../login/login-router.js');

//Set Middleware Authenticator


const server = express();

//set sessionConfig




server.use(helmet());
server.use(express.json());
server.use(cors());
// server.use(session(sessionConfig));

server.use("/api/users", authenticator, usersRouter);
server.use("/api/auth", authRouter)
server.use("/api/login", loginRouter)

server.get("/", (req, res) =>{
    res.status(200).json({message: `The Server is Up and Running!!!!`})
})

module.exports = server;