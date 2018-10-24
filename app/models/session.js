module.exports = (sequelize, Sequelize) => {
    const Session = sequelize.define('Session', {
        sid: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        expires: Sequelize.DATE,
        data: Sequelize.TEXT,
    });
    return Session;
};
