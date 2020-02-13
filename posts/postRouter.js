const express = require('express');

const Posts = require('./postDb');

const router = express.Router();

router.get('/', (req, res) => {
  Posts.get(req.query)
  .then(posts => {
    res.status(200).json(posts)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ error: err.message })
  })
});

router.get('/:id', validatePostId, (req, res) => {
  Posts.getById(req.params.id)
  .then(post => {
    if (post) {
      res.status(200).json(post)
    } else {
      res.status(404).json({error: err.message})
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error: err.message})
  })
});

router.delete('/:id', validatePostId, (req, res) => {
  Posts.remove(req.params.id)
  .then(post => {
    res.status(200).json(post)
  })
  .catch(err => {
    console.log(err);
    res.status(404).json({error: err.message})
  })
});

router.put('/:id', validatePostId, (req, res) => {
  Posts.update(req.params.id, req.body)
  .then(post => {
    res.status(200).json(post)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error: err.message})
  })
});

// custom middleware

function validatePostId(req, res, next) {
    if(req.params.id) {
      next();
    } else {
      res.status(400).json({message: "Invalid post id"})
    }
}

module.exports = router, validatePostId;
