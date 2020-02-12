const express = require('express');
const helmet = require('helmet');

const userRouter = require('./users/userRouter');
const postRouter = require('./posts/postRouter');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(logger);

server.use('/api/users', validateUser, userRouter);
server.use('api/posts', postRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  const timestamp = Date.now()
  console.log(`${req.method} Request to ${req.originalUrl} at ${timestamp}`)
  next();
}

function validateUserId(req, res, next) {
  if(req.id) {
    req.user = req.id;
    next();
  } else {
    res.status(400).json({Error: res.message})
  }
}

function validateUser(req, res, next) {
  if(req.body) {
    next()
  } else if (req.body && !req.body.name) {
    res.status(400).json({Error: res.message})
  } else {
    res.status(400).json({Error: res.message})
  }
}

function validatePost(req, res, next) {
  if(req.body) {
    next()
  } else if (req.body && !req.body.text) {
    res.status(400).json({Error: res.message})
  } else {
    res.status(400).json({Error: res.message})
  }
}

module.exports = server;
