const express = require('express');
const helmet = require('helmet');

const userRouter = require('./users/userRouter');
const postRouter = require('./posts/postRouter');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  const timestamp = Date.now()
  console.log(`${req.method} Request to ${req.originalUrl} at ${timesstamp}`)
  next();
}

module.exports = server;
