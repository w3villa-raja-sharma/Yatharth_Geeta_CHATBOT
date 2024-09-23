const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routes');
const app = express();
const cors=require('cors');
const port = 3000||3002;

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/',(res)=>{res.send('Jai Shree Krishrna')})

//routes
app.use(cors());
app.use('/api',router)

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
  })