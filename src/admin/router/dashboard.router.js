var { getList } = require('../controller/dashboard.controller');
var express = require('express');
var router = express.Router();
// Company List
router.post('/page', getList);

module.exports = router;