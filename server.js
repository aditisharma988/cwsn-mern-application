
const express = require('express');
const cors=require("cors");


const mongoose = require('mongoose');
const routes = require('./routes/router.js');

const app = express();

const PORT = process.env.PORT || 5000;


//middleware
const corsOptions = {
  origin: 'http://localhost:3000',  // Update this with your frontend's address
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());


app.use((req,res,next)=> {
console.log(req.path,req.method)
next();
});
//routes

app.use('/api/router', routes);

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/specialneeds')
//    // useNewUrlParser:'true'
//     //  useUnifiedTopology; 'true'
mongoose.connect('mongodb://127.0.0.1:27017/specialneeds', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


  .then(()=> {
    app.listen(PORT, () => {
      console.log(`Connected to db & Server is running on port ${PORT}`);
    })
    

  })
  .catch((error)=>{
    console.log(error)
  
});





