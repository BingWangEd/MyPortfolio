require('dotenv').config();
const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

mongoose.connect(process.env.mongodburi, { useNewUrlParser: true })

mongoose.connection.once('open', ()=>{
  console.log('Connected to database');
});

const app = express();
app.use(cors());
app.use(express.static("public"));

app.use('/graphql', bodyParser.json(), graphqlHTTP({
  schema,
  graphiql: true
}));

app.withCredentials = true;

app.use('/', (req, res) => res.send("Welcome to read my profile"));

const port = process.env.PORT || 4000;
app.listen(port, ()=>{
  console.log(`Now listening requests on port:${port}`);
})