require('dotenv').config()
// EXPRESS
const  express = require('express');
const app = express();

const createdParks = require('./controllers/userPark');
const user = require('./controllers/user-controller');
const allPark=require('./controllers/allParks');
// DATABASE IMPORT & SYNC
const sequelize = require('./db');
sequelize.sync();
app.use(express.json());

app.use(require ('./middleware/headers'));


app.use('/all', allPark);


app.use('/sign',user);

app.use('/created', createdParks);


app.listen(process.env.PORT, function (){
    console.log(`listening on ${process.env.PORT}`);
})