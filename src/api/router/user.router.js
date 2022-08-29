const { insertController, loginController, subscriptionController, meditationController, infoController, stepController } = require('../controller/user.controller');
var role = require('express').Router();


role.post('/', insertController);

role.post('/login', loginController);

role.post('/subscription', subscriptionController);

role.post('/meditation', meditationController);

role.post('/info', infoController);

role.post('/step', stepController);

module.exports = role;