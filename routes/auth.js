var express = require('express');
var router = express.Router();
const AuthService = require('../services/auth.service');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', [], async (req, res) => {
  try {
    console.log('the request body received:',req.body)
    const { value, error } = await AuthService.registerUser(req.body);
    if (error || !value) {
      res.status(400).json({
        message: 'User registration failed',
        error: error
      })
    } else {
      res.status(200).json({
        message: 'User registered successfully!',
        response: value
      })
    }
    // res.status(200).json({
    //   message: 'User registered successfully!',
    //   response: value
    // })
  } catch (error) {
    res.status(400).json({
      message: 'User registration failed',
      error: error
    })
  }
})

module.exports = router;
