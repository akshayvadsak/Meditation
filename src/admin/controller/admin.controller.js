const { insertHelper, viewHelper, updateHelper } = require('../helper/admin.helper');

/***
 * 
 * @description Role Insert 
 * 
 */
exports.insertController = async (req, res, next) => {
    var response;
    try {
        response = await insertHelper(req.body);
        res.json(response);
    } catch (error) {
        res.json({ error: error });
    }
};


/***
 * 
 * @description Role Insert 
 * 
 */
 exports.viewController = async (req, res, next) => {
    var response;
    try {
        response = await viewHelper(req.body);
        res.json(response);
    } catch (error) {
        res.json({ error: error });
    }
};


// Admin Update 
exports.updateOne = async (req, res, next) => {
    req.body.MEDITATION_ID = req.params.id;
    let response = await updateHelper(req.body);
    res.json(response);
};


