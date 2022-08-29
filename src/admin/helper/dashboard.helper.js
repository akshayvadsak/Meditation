var {  getServices } = require('../services/dashboard.services');



// Get All
async function getall(params) {
    try {
        var getService = await getServices(params);
        return getService;
    } catch (error) {
        return {
            status: false,
            msg: "Helper Error."
        };
    }
}

module.exports = { getall } // , getall, updateone, deleteone };