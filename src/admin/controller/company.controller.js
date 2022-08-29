const { insertone, getall, updateone, deleteone } = require('../helper/company.helper'); // , getall, deleteone, updateone
var path = require('path');
var fs = require('fs');


exports.insertOne = async (req, res, next) => {
    let response = await insertone(req.body);
    res.json(response);
};


exports.getList = async (req, res, next) => {
    var response = await getall(req.body);
    res.json(response);
};


// Company Update 
exports.updateOne = async (req, res, next) => {
    req.body.COMPANY_ID = req.params.id;
    let response = await updateone(req.body);
    res.json(response);
};


// Delete 
exports.deleteOne = async (req, res, next) => {
    req.body.COMPANY_ID = req.params.id;
    let response = await deleteone(req.body);
    res.json(response);
};