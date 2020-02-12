const express = require('express');

const Users = require('./userDb');
const Posts = require('../posts/postDb');

const router = express.Router();

router.post('/', validateUser, (req, res) => {
  Users.insert(req.body)
  .then(user => {
    res.status(201).json(user);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({Error: err.message})
  })
});

router.post('/:id/posts', validateUserId, validatePost, (req, res) => {
  Posts.insert(req.body)
  .then(post => {
    res.status(201).json(post)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({Error: err.message})
  })
});

router.get('/', (req, res) => {
  Users.get(req.query)
  .then(users => {
    res.status(200).json(users);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({Error: err.message})
  })
});

router.get('/:id', validateUserId, (req, res) => {
  Users.getById(req.params.id)
  .then(user => {
    if (user) {
      res.status(200).json(user)
    } else {
      res.status(404).json({Error: err.message})
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({Error: err.message})
  })
});

router.get('/:id/posts', (req, res) => {
  Users.getUserPosts(req.params.id)
  .then(posts => {
    res.status(200).json(posts);
  })
  .catch(err => {
    console.log(err);

  })
});

router.delete('/:id', validateUserId, (req, res) => {
  Users.remove(req.params.id)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(err => {
    res.status(500).json({Error: err.messsage})
  })
});

router.put('/:id', validateUser, (req, res) => {
  Users.update(req.params.id, req.body)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({Error: err.message})
  })
});

//custom middleware
function validateUserId(req, res, next) {
  if(req.params.id) {
    req.user = req.params.id;
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
