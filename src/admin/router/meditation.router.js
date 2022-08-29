const {  insertController } = require('../controller/meditation.controller');
var role = require('express').Router();

role.post('/', insertController);

module.exports = role;