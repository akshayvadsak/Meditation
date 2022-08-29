
const { models } = require('../../database/index');

/***
 * 
 * @description Date - 29-12-2021 Create By Dipesh 
 * Update By 
 * 
 */
async function insertServices(params) {
    try {
        var insertSave = await models.Admin.create(params);
        if (insertSave != undefined) {
            return {
                status: true,
                msg: "Create Successfully.",
                data: insertSave
            }
        } else {
            /// 502
            return {
                status: false,
                msg: "Error on Insert Data."
            }
        }
    } catch (error) {
        var errMessage = error.message.split(',\n').join('');
        return {
            status: false,
            msg: errMessage.split('Validation error: ').join('')
        }
    }
}



/***
 * 
 * @description Date - 29-12-2021 Create By Dipesh 
 * Update By 
 * 
 */
async function viewServices(params) {
    try {
        const { EMAIL, PASSWORD } = params;
        let countEmailUser = await models.Admin.findOne({ where: { EMAIL: EMAIL, PASSWORD: PASSWORD } });
        if (countEmailUser !== null) {
            return {
                status: true,
                msg: "Login Successfully.",
                data: countEmailUser
            }
        } else {
            return {
                status: false,
                msg: "Email and password must be match."
            }
        }
    } catch (error) {
        var errMessage = error.message.split(',\n').join('');
        return {
            status: false,
            msg: errMessage.split('Validation error: ').join('')
        }
    }
}



/***
 * 
 * @description Date - 29-12-2021 Create By Dipesh 
 * Update By 
 * 
 */
 async function updateServices(params) {
    try {
        const { EMAIL, PASSWORD, FULLNAME, NAME } = params;
        var updateOne = await models.Admin.upsert(
            {
                EMAIL: EMAIL, PASSWORD: PASSWORD,
                FULLNAME: FULLNAME, NAME: NAME,
                UPDATE_DATE: new Date()
            }
        );
        if (updateOne !== null) {
            return {
                status: true,
                msg: "Update Successfully.",
                data: updateOne[0]
            }
        } else {
            return {
                status: false,
                msg: "Please Try Again."
            }
        }
    } catch (error) {
        var errMessage = error.message.split(',\n').join('');
        return {
            status: false,
            msg: errMessage.split('Validation error: ').join('')
        }
    }
}

module.exports = { insertServices, viewServices, updateServices };