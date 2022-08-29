const { insertone, getall, updateone, imageupdateone, musicupdateone } = require('../helper/mindtree.helper'); // , getall, deleteone, updateone
const { startUploadSingleFile, startImageUploadSingleFile, startMusicUploadSingleFile } = require('../middleware/upload.file.middleware');


exports.insertOne = async (req, res, next) => {
    let response;
    var imageResponse = await startUploadSingleFile(req, res);
    if (imageResponse.status) {
        req.body.IMAGE = imageResponse.urls.imageurl;
        req.body.MUSIC = imageResponse.urls.audiourl;
        response = await insertone(req.body);
        res.json(response);
    } else {
        res.json(response);
    }
};


exports.getList = async (req, res, next) => {
    var response = await getall(req.body);
    res.json(response);
};


exports.updateOne = async (req, res, next) => {
    req.body.MEDITATION_ID = req.params.id;
    let response = await updateone(req.body);
    res.json(response);
};



exports.imageupdateOne = async (req, res, next) => {
    let response;
    var imageResponse = await startImageUploadSingleFile(req, res);
    if (imageResponse.status) {
        req.body.MEDITATION_ID = req.params.id;
        req.body.IMAGE = imageResponse.imageurl;
        response = await imageupdateone(req.body);
        res.json(response);
    } else {
        res.json(response);
    }
};


exports.musicupdateOne = async (req, res, next) => {
    let response;
    var imageResponse = await startMusicUploadSingleFile(req, res);
    if (imageResponse.status) {
        req.body.MUSIC = imageResponse.audiourl;
        response = await musicupdateone(req.body);
        res.json(response);
    } else {
        res.json(response);
    }
};
