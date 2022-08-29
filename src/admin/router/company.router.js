var { getList, updateOne, deleteOne, insertOne } = require('./../controller/company.controller');
var express = require('express');
var router = express.Router();
// Company Insert 
router.post('/', insertOne);
// Company List
router.post('/page', getList);
// Company Update
router.put('/:id', updateOne);
// Delete File
router.patch('/:id', deleteOne);

module.exports = router;