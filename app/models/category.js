module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define('Category', {
        title: Sequelize.STRING,
    });
    
    Category.associate = (models) => {
        Category.belongsTo(models.User);
        Category.hasMany(models.Snippet);
    };
    
    return Category;
};
