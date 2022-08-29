const {  insertController, viewController, updateOne } = require('../controller/admin.controller');
var role = require('express').Router();

role.post('/', insertController);

role.put('/', viewController);

role.put('/:id', updateOne)

module.exports = role;