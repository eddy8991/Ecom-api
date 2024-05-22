const mongoose = require('mongoose');
const app = require('./app')
const dotenv = require('dotenv')

// database connection
dotenv.config({ path: './config.env' });
const dbURL = process.env.DATABASE;

mongoose.connect(dbURL, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
 })
 .then(() =>{ console.log('DB connected')})

 const port = 3000
 const server = app.listen(port, ()=>{
  console.log(`app is running on port ${port}`)
 })