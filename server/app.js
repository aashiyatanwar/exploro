/*const express = require("express");
const app = express();
require("dotenv/config");

const cors = require("cors");
const { default: mongoose } = require("mongoose");
app.use(cors({ origin: true }));

app.get("/", (req, res) => {
  return res.json("Hi there");
});

//user authentatication route
const userRoute = require("./routes/auth");
app.use("/api/users/", userRoute);

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });
mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (error) => {
    console.log(`Error : ${error}`);
  });
app.listen(5000, () => console.log("express server listening to 5000"));
*/

const Sample=require('./models/sample')
const express = require("express");
const app = express();
require("dotenv/config");

const cors = require("cors");
const { default: mongoose } = require("mongoose");
app.use(cors({ origin: true }));

app.get("/", (req, res) => {
  return res.json("Hi there");
});

app.get("/api/data", async(req, res) => {
  
  return res.json(Sample);
  
  
})

app.get("/api/sample/:Srno",(req,res)=>{
  const srno = (req.params.Srno);
  const item = Sample.find((item)=> item.Srno === srno)

  if(item){
    res.json(item)

  }
  else{
    res.status(404).json({error:'Item not found'})
  }
})

//user authentatication route
const userRoute = require("./routes/auth");
app.use("/api/users/", userRoute);

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });
mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (error) => {
    console.log(`Error :  ${error}`);
  });
app.listen(5000, () => console.log("express server listening to 5000"))