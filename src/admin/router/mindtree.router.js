var { getList, updateOne, musicupdateOne, insertOne, imageupdateOne } = require('./../controller/mindtree.controller');
var express = require('express');
var router = express.Router();
// Upload File Audio And Image
router.post('/', insertOne);
// List of File
router.post('/page', getList);
// Update Data
router.patch('/:id', updateOne);
// Update Image File
router.put('/:id', imageupdateOne);
// Update Music File
router.put('/', musicupdateOne);

module.exports = router;