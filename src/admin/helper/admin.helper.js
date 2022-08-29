const { insertServices, viewServices, updateServices } = require('../services/admin.services');

/***
 * 
 * @description Role Help For Request
 * 
 */
async function insertHelper(params) {
    try {
        var insertService = await insertServices(params);
        return insertService;
    } catch (error) {
        return {
            status: false,
            msg: "Helper Error."
        };
    }
}


/***
 * 
 * @description Role Help For Request
 * 
 */
 async function viewHelper(params) {
    try {
        var insertService = await viewServices(params);
        return insertService;
    } catch (error) {
        return {
            status: false,
            msg: "Helper Error."
        };
    }
}

// Get one rating update
async function updateHelper(params) {
    try {
        let getUpdateServices = await updateServices(params);
        return getUpdateServices;
    } catch (error) {
        return {
            status: false,
            msg: "Helper Error."
        };
    }
}


module.exports = { insertHelper, viewHelper, updateHelper };