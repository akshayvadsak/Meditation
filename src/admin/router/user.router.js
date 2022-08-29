var { getList, deleteOne } = require('../controller/user.controller');
var express = require('express');
var router = express.Router();
// Company List
router.post('/page', getList);
// Company Update
router.patch('/:id', deleteOne);

module.exports = router;