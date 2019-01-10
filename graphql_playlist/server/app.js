const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require('./schema/schema');
const mongoose = require('mongoose');

mongoose.connect('mongodb://bwang:bwang0627@ds253324.mlab.com:53324/gql-myportfolio', { useNewUrlParser: true })
mongoose.connection.once('open', ()=>{
  console.log('Connected to database');
});

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, ()=>{
  console.log("Now listening requests on port 4000");
})