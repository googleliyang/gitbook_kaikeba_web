const {Router} = require('express')
const path = require('path')
let router = Router()

// Application middle
router.use(function (req, res, next) {
  console.log(`time => ${new Date().now} path => ${req.path} method => ${req.method}`);
  next();
});

router.get('/login', (req, res) => {
  // current send file is sync, not use try catch, deal error in param
  try {
    res.sendFile(path.join(__dirname, '../views/login.html'), (err) => {
      if (err) throw err
      console.log('send finish')
    })
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
