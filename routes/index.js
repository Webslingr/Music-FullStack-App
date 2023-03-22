var express = require('express');
const validateToken = require('../middleware/validateToken');
var router = express.Router();
// var validateToken = require('../../middleware/validateToken')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

//SONGS
var songsRouter = require('./api/songs')
router.use('/songs', songsRouter)

//USERS
var usersRouter = require('./api/users')
// usersRouter.user(validateToken)
router.use('/users', usersRouter)

module.exports = router;
