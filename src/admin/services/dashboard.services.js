
const { models } = require('../../database/index');

// Promo Code
async function getServices(params) {
    try {
        let countUser = await models.User.count({});
        let countCompany = await models.Company.count({});
        return {
            status: true,
            msg: "Show data Successfully.",
            data: {
                countUser,
                countCompany
            }
        }
    } catch (error) {
        return {
            status: false,
            msg: "DB Error."
        };
    }
}

module.exports = { getServices }; 