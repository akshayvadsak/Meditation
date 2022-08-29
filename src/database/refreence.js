
function applyForeignKeySetup(sequelize) {
	const { Meditation, User, Step  } =  sequelize.models;
	Meditation.hasMany(User, { constraints: true, foreignKey: { name: 'MEDITATION_ID', allowNull: false } });
	User.belongsTo(Meditation, { constraints: true, foreignKey: { name: 'MEDITATION_ID', allowNull: false } });
	Meditation.hasMany(User, { constraints: true, foreignKey: { name: 'NEXT_MEDITATION_ID', allowNull: false } });
	User.belongsTo(Meditation, { constraints: true, foreignKey: { name: 'NEXT_MEDITATION_ID', allowNull: false } });
	User.hasMany(Step, { constraints: true, foreignKey: { name: 'USER_ID', allowNull: false } });
	Step.belongsTo(User, { constraints: true, foreignKey: { name: 'USER_ID', allowNull: false } });
}
module.exports = { applyForeignKeySetup };