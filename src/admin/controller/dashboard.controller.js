
const {  getall } = require('../helper/dashboard.helper'); // , getall, deleteone, updateone


exports.getList = async (req, res, next) => {
    var response = await getall(req.body);
    res.json(response);
};
