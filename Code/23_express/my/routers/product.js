const {Router} = require('express')
let router = Router()


router.get('/product', (req, res) => {
  res.json({
    name: 'computer',
    price: 100
  })
})

module.exports = router
