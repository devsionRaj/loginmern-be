var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.put('/signup', (req, res) => {
  res.send('SignUp route has been created successfully!')
})

module.exports = router;
