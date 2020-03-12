module.exports = (sequelize, DataTypes) => {
    const userParks = sequelize.define('userParks', {
        Name : {
            type: DataTypes.STRING,
            allowNull: false
        },
        Location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Hours: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return userParks;
}