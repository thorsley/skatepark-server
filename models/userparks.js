module.exports = (sequelize, DataTypes) => {
    const userParks = sequelize.define('parks', {
        nameOfPark: {
            type: DataTypes.STRING,
            allowNull: false
        },
        locationOfPark: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hoursOfPark: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ratingOfPark: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        commentsOfPark:{
            type: DataTypes.STRING,
            allowNull: false
        }
        
    })
    return userParks;
}