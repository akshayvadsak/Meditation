
const {  getall, deleteone } = require('../helper/user.helper'); // , getall, deleteone, updateone


exports.getList = async (req, res, next) => {
    var response = await getall(req.body);
    res.json(response);
};

// Delete 
exports.deleteOne = async (req, res, next) => {
    req.body.USER_ID = req.params.id;
    let response = await deleteone(req.body);
    res.json(response);
};