const express = require('express');
const mongoose =require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;
const Routes = require('./routes/route.js')
dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true })); 
app.use('/',Routes);
app.use(cors());

const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const CONNECTION_URL =`mongodb+srv://${userName}:${password}@cluster0.ngb8lfk.mongodb.net/crud_app`;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('Connected to mongoDB successfully');
}).catch(err=>console.log(err.message));
app.listen(PORT, ()=>{
    console.log(`Listening to port http://localhost:${PORT}`);
});




app.get('/', (req, res)=>{
    res.send('<h1>BRo start working on backend!</h1>');
})