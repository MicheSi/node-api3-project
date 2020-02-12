const express = require('express');

const Users = require('./userDb');

const router = express.Router();

router.post('/', (req, res) => {
  // do your magic!
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware
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

module.exports = router, validateUserId, validateUser, validatePost;
