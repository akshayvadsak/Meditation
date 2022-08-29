var router = require('express').Router();

router.use('/user', require('./router/admin.router'));

router.use('/meditation', require('./router/mindtree.router'));

router.use('/company', require('./router/company.router'));

router.use('/user', require('./router/user.router'));

router.use('/dashboard', require('./router/dashboard.router'));

/***
 * 
 * Middleware API - If not found any url
 * 
 */
router.use(function (req, res, next) {
    var err = {};
    err.status = 404;
    err.msg = "Not Found";
    next(res.json({ status: false, msg: err }));
});
module.exports = router;
