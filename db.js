const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.Name, 'postgres', process.env.PASS,{
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
.then(function(err){
    console.log('Successfully connected.');
})
.catch(function(err){
    console.log('unable to connect to the database:', err);
});

module.exports = sequelize;