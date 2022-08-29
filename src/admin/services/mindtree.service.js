
const { models } = require('../../database/index');

// Promo Code
async function getServices(params) {
    try {
        const { PAGENUMBER, PAGELIMIT } = params;
        let list = await models.Meditation.findAll({
            offset: PAGENUMBER * PAGELIMIT,
            limit: PAGELIMIT
        });
        let counts = await models.Meditation.count({});
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
        params.CREATE_DATE = new Date();
        params.UPDATE_DATE = new Date();
        var insertOne = await models.Meditation.create(params);
        if (insertOne != null) {
            return {
                status: true,
                data: insertOne
            };
        } else {
            return {
                status: false,
                msg: "Meditation Error."
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


async function updateServices(params) {
    try {
        const { TITLE, SUBTITLE, TEXT, MEDITATION_ID, MEDITATION_TYPE } = params;
        var insertOne = await models.Meditation.update({
            TITLE: TITLE,
            SUBTITLE: SUBTITLE,
            TEXT: TEXT,
            UPDATE_DATE: new Date(),
            MEDITATION_TYPE: MEDITATION_TYPE
        }, {
            where: { MEDITATION_ID: MEDITATION_ID }
        });
        if (insertOne != null) {
            var findOne = await models.Meditation.findByPk(MEDITATION_ID);
            return {
                status: true,
                data: findOne
            };
        } else {
            return {
                status: false,
                msg: "Meditation Error."
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
async function imagesServices(params) {
    try {
        const { MEDITATION_ID, IMAGE } = params;
        
        var insertOne = await models.Meditation.update({
            IMAGE: IMAGE,
            UPDATE_DATE: new Date()
        }, {
            where: { MEDITATION_ID: MEDITATION_ID }
        });
        if (insertOne != null) {
            var findOne = await models.Meditation.findByPk(MEDITATION_ID);
            console.log(findOne, " ***************************************************")
            return {
                status: true,
                data: findOne
            };
        } else {
            return {
                status: false,
                msg: "Meditation is not updated."
            };
        }
    } catch (error) {
        return {
            status: false,
            msg: "DB Error."
        };
    }
}


async function musicServices(params) {
    try {
        const { MEDITATION_ID, MUSIC } = params;
        var insertOne = await models.Meditation.update({
            MUSIC: MUSIC,
            UPDATE_DATE: new Date()
        }, {
            where: { MEDITATION_ID: MEDITATION_ID }
        });
        if (insertOne != null) {
            var findOne = await models.Meditation.findByPk(MEDITATION_ID);
            return {
                status: true,
                data: findOne
            };
        } else {
            return {
                status: false,
                msg: "Meditation is not updated."
            };
        }
    } catch (error) {
        return {
            status: false,
            msg: "DB Error."
        };
    }
}

module.exports = { insertServices, getServices, updateServices, imagesServices, musicServices }; 