module.exports = (sequelize, DataTypes) => {
    const allParks = sequelize.define('userParks', {
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
        },
        Comments:{
            type:DataTypes.STRING,
            allowNull:false
        }
    })
    return allParks;
}