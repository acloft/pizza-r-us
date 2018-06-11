const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes.js')
const dotenv = require('dotenv')
const mongo = require('./mongodb')
const conn = mongo.connection
const ObjectId = mongo.ObjectId


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
 


app.post("/api/register",registerUser);
app.post("/api/login",loginUser);

const port = 8080

mongo.connect(process.env.MONGODB_URL)
.then(()=>{app.listen(port)})
.then(()=>console.log(`Magic happens on ${port}`))

function registerUser(req, res){
    createUser(req.body)
    .then(data=>{
        res.status(200).send(req.body)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
    
}

function loginUser(req, res){

}

function createUser(doc){
    return conn.db().collection("users").insert(doc)
    .then(data =>{
        return data
    })
}