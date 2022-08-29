const { insertServices, loginServices, subscriptionServices, meditationServices, infoServices, stepServices } = require('../services/user.services');

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
 async function loginHelper(params) {
    try {
        var insertService = await loginServices(params);
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
 async function subscriptionHelper(params) {
    try {
        var insertService = await subscriptionServices(params);
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
 async function meditationHelper(params) {
    try {
        var insertService = await meditationServices(params);
        return insertService;
    } catch (error) {
        return {
            status: false,
            msg: "Helper Error."
        };
    }
}


async function infoHelper(params) {
    try {
        var insertService = await infoServices(params);
        return insertService;
    } catch (error) {
        return {
            status: false,
            msg: "Helper Error."
        };
    }
}


async function stepHelper(params) {
    try {
        var stepService = await stepServices(params);
        return stepService;
    } catch (error) {
        return {
            status: false,
            msg: "Helper Error."
        };
    }
}



module.exports = { insertHelper, loginHelper, subscriptionHelper, meditationHelper, infoHelper, stepHelper };