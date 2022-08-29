var { insertServices, getServices, getUpdateService, oneDeleteService } = require('../services/company.services');

// Insert Rating
async function insertone(params) {
    try {
        let insertService = await insertServices(params);
        return insertService;
    } catch (error) {
        return {
            status: false,
            msg: "Helper Error."
        };
    }
}

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


// // Get one rating update
async function updateone(params) {
    try {
        let getUpdateServices = await getUpdateService(params);
        return getUpdateServices;
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
module.exports = { insertone, getall, updateone, deleteone } // , getall, updateone, deleteone };