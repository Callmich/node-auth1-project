const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');

//Set Routers & Middleware


const server = express();

//set sessionConfig




server.use(helmet());
server.use(express.json());
server.use(cors());
// server.use(session(sessionConfig));

server.use("/api/users", authenticator, usersRouter);
server.use("/api/auth", authRouter)

server.get("/", (req, res) =>{
    res.status(200).json({message: `The Server is Up and Running!!!!`})
})

module.exports = server;