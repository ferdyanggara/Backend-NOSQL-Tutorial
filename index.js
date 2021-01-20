require('dotenv').config();
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const morgan = require('morgan')
const userRoutes = require('./router/UserRouter')
// app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'))
app.use('/user',userRoutes)

const connectToMongo = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true})
    console.log('connected to MongoDB')
  } catch (err) {
    console.log('error: ', err.message);
  }
}

app.use((req,res,next) =>{
  console.log('new request made');
  console.log('host:', req.hostname)
  next();
})
app.get('/', (req,res) => {
  res.send('kontol')
})


connectToMongo();

app.listen(5000, ()=>{
  console.log('listening on 5000')
})

