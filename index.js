const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('.routes.js')
const dotenv = require('dotenv')
const mongo = require('./app/mongodb')
const mongodb = require('./mongodb')
const conn = mongodb.connection
const ObjectId = mongodb.ObjectId


dotenv.config()

app.use(bodyParser.json())

//enable CORS - cross origin resource sharing
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("withCredentials", true);
    res.header(
       "Access-Control-Allow-Headers",
       "Origin, X-Requested-With, Content-Type, Accept, Cookie, x-access-token"
    );
    next();
 });
 


app.post("/register",registerUser);
app.post("/login",loginUser);

const port = 8080

mongo.connect(process.env.MONGODB_URL)
.then(()=>{app.listen(port)})
.then(()=>console.log(`Magic happens on ${port}`))

function registerUser(req, res){

}

function loginUser(req, res){

}
