var {  getServices, oneDeleteService } = require('../services/user.services.js');

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

// // Delete
async function deleteone(params) {
    try {
        var errorValidator = await oneDeleteService(params);
        return errorValidator;
    } catch (error) {
        return {
            status: false,
            msg: "Helper Error."
        };
    }
}

module.exports = { getall, deleteone } // , getall, updateone, deleteone };