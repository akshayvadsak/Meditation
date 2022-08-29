
const { models } = require('../../database/index');
const { Op } = require("sequelize")
// Promo Code
async function getServices(params) {
    try {
        const { PAGENUMBER, PAGELIMIT, SEARCH } = params;
        if (!!SEARCH) {
            let list = await models.User.findAll({
                offset: PAGENUMBER * PAGELIMIT,
                limit: PAGELIMIT,
                order: [
                    ['USER_ID', 'DESC']
                ],
                where: {
                    [Op.or]: [{
                        SOCIAL_ID: SEARCH
                    }, {
                        EMAIL: SEARCH
                    }]
                }
            });
            let counts = await models.User.count({
                where: {
                    [Op.or]: [{
                        SOCIAL_ID: SEARCH
                    }, {
                        EMAIL: SEARCH
                    }]
                }
            });
            return {
                status: true,
                msg: "Show data Successfully.",
                data: {
                    counts,
                    list
                }
            }
        } else {
            let list = await models.User.findAll({
                offset: PAGENUMBER * PAGELIMIT,
                limit: PAGELIMIT,
                order: [
                    ['USER_ID', 'DESC']
                ],
            });
            let counts = await models.User.count({});
            return {
                status: true,
                msg: "Show data Successfully.",
                data: {
                    counts,
                    list
                }
            }
        }

    } catch (error) {
        console.log(error)
        return {
            status: false,
            msg: "DB Error."
        };
    }
}


// Delete
async function oneDeleteService(params) {
    try {
        const { USER_ID, ISDELETE, ISACTIVE } = params;
        var deleteOne = await models.User.update(
            {
                ISDELETE: ISDELETE, ISACTIVE: ISACTIVE , UPDATE_DATE: new Date()
            },
            {
                where: { USER_ID: USER_ID }
            }
        );
        if (deleteOne != null) {
            var getOne = await models.User.findByPk(USER_ID);
            return {
                status: true,
                data: getOne
            };
        } else {
            return {
                status: false,
                msg: "User is not delete."
            };
        }
    } catch (error) {
        return {
            status: false,
            msg: "DB Error."
        };
    }
}

module.exports = { getServices, oneDeleteService }; 