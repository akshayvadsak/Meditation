var { insertServices, getServices, updateServices, imagesServices, musicServices } = require('../services/mindtree.service');

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


// Get All
async function updateone(params) {
    try {
        var updateService = await updateServices(params);
        return updateService;
    } catch (error) {
        return {
            status: false,
            msg: "Helper Error."
        };
    }
}


// Insert Rating
async function imageupdateone(params) {
    try {
        let imagesService = await imagesServices(params);
        return imagesService;
    } catch (error) {
        return {
            status: false,
            msg: "Helper Error."
        };
    }
}


// Insert Rating
async function musicupdateone(params) {
    try {
        let musicService = await musicServices(params);
        return musicService;
    } catch (error) {
        return {
            status: false,
            msg: "Helper Error."
        };
    }
}

module.exports = { insertone, getall, updateone, imageupdateone, musicupdateone };