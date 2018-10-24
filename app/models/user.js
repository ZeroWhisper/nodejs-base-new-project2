module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
    });
    
    User.associate = (models) => {
        User.hasMany(models.Category);
    };
    
    return User;
};