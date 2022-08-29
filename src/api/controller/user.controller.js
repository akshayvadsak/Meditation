const { insertHelper, loginHelper, subscriptionHelper, meditationHelper, infoHelper, stepHelper } = require('../helper/user.helper');

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
 exports.loginController = async (req, res, next) => {
    var response;
    try {
        response = await loginHelper(req.body);
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
 exports.subscriptionController = async (req, res, next) => {
    var response;
    try {
        response = await subscriptionHelper(req.body);
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
 exports.meditationController = async (req, res, next) => {
    var response;
    try {
        response = await meditationHelper(req.body);
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
exports.infoController = async(req,res, next) => {
    var response;
    try {
        response = await infoHelper(req.body);
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
exports.stepController = async(req,res, next) => {
    var response;
    try {
        response = await stepHelper(req.body);
        res.json(response);
    } catch (error) {
        res.json({ error: error });
    }
};

