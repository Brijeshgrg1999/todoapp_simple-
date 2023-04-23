const express = require("express") ; 
const mongoose = require("mongoose") ;
const routes = require("./routes/ToDoRoutes.js") ; 
const cors  = require("cors") ; 


require('dotenv').config() ; 

const app = express() ; 
const PORT = process.env.port || 5050; 
app.use(express.json()) ; 
app.use(cors()) ; 


//connection with the mongodb 
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{console.log(`connected to mongodb ..`);}).catch((err)=>{console.log(err)}); 


app.use(routes);



app.listen(PORT , ()=>{console.log(`server started on ${PORT}`);})