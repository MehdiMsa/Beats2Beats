const router = require('express').Router()
const categoryCtrl = require('../controllers/categoryCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')


router.route('/category')
    .get(categoryCtrl.getCategories)
    .post(authAdmin, categoryCtrl.createCategory)

router.route('/category/:id')
    .delete(authAdmin, categoryCtrl.deleteCategory)
    .put(authAdmin, categoryCtrl.updateCategory)


module.exports = router