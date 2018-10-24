module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.createTable('Sessions', {
            sid: {
                type: Sequelize.STRING,
                allowNull: false,
                primaryKey: true,
            },
            expires: Sequelize.DATE,
            data: Sequelize.TEXT,
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        queryInterface.dropTable('Sessions');
    }
};
