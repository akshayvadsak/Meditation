
const { models } = require('../../database/index');
const { Op } = require("sequelize")
// Promo Code
async function getServices(params) {
    try {
        const { PAGENUMBER, PAGELIMIT } = params;
        let list = await models.Company.findAll({
            offset: PAGENUMBER * PAGELIMIT,
            limit: PAGELIMIT,
            order: [
                ['COMPANY_ID', 'DESC']
            ],
        });
        let counts = await models.Company.count({});
        return {
            status: true,
            msg: "Show data Successfully.",
            data: {
                counts,
                list
            }
        }
    } catch (error) {
        return {
            status: false,
            msg: "DB Error."
        };
    }
}

// Promo Code Instert One
async function insertServices(params) {
    try {
        const { COMPANY_CODE, COMPANY_NAME } = params;
        params.CREATE_DATE = new Date();
        params.UPDATE_DATE = new Date();
        var countCompany = await models.Company.count({
            where: {
                [Op.or]: [{ COMPANY_NAME: COMPANY_NAME }, { COMPANY_CODE: COMPANY_CODE }]
            }
        });
        if (countCompany === 0) {
            var insertOne = await models.Company.create(params);
            if (insertOne != null) {
                return {
                    status: true,
                    data: insertOne
                };
            } else {
                return {
                    status: false,
                    msg: "Company Error."
                };
            }
        } else {
            return {
                status: false,
                msg: "Please Company Name and Company Code must be unique."
            };
        }
    } catch (error) {
        console.log(error);
        return {
            status: false,
            msg: "DB Error."
        };
    }
}

// Promo Code One Update
async function getUpdateService(params) {
    try {
        const { COMPANY_ID, COMPANY_CODE, COMPANY_NAME, COMPANY_ADDRESS, ISACTIVE } = params;
        var countCompany = await models.Company.count({
            where: {
                [Op.or]: [{ COMPANY_NAME: COMPANY_NAME }, { COMPANY_CODE: COMPANY_CODE }],
                [Op.not]: [{ COMPANY_ID: COMPANY_ID }]
            }
        });
        if (countCompany === 0) {
            var updateOne = await models.Company.upsert(
                {
                    COMPANY_ID: COMPANY_ID, COMPANY_CODE: COMPANY_CODE,
                    COMPANY_NAME: COMPANY_NAME, COMPANY_ADDRESS: COMPANY_ADDRESS,
                    ISACTIVE: ISACTIVE, UPDATE_DATE: new Date()
                }
            );
            return {
                status: true,
                data: updateOne[0]
            };
        } else {
            return {
                status: false,
                msg: "Please Company Name and Company Code must be unique."
            }
        }
    } catch (error) {
        return {
            status: false,
            msg: "DB Error."
        };
    }
}

// Delete
async function oneDeleteService(params) {
    try {
        const { COMPANY_ID, ISDELETE } = params;
        var deleteOne = await models.Company.update(
            {
                ISDELETE: ISDELETE, UPDATE_DATE: new Date()
            },
            {
                where: { COMPANY_ID: COMPANY_ID }
            }
        );
        if (deleteOne != null) {
            var getOne = await models.Company.findByPk(COMPANY_ID);
            return {
                status: true,
                data: getOne
            };
        } else {
            return {
                status: false,
                msg: "Company is not delete."
            };
        }
    } catch (error) {
        return {
            status: false,
            msg: "DB Error."
        };
    }
}

module.exports = { insertServices, getServices, getUpdateService, oneDeleteService }; 