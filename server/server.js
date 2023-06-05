const express=require("express");
const products=require("./data/products")
const cors = require("cors")
const dotenv=require("dotenv")
const app=express();
app.use(cors())
require("colors")

dotenv.config();
const connectDb=require("./config/config")
connectDb();

app.get("/",(req,res)=>{
     res.send("welcome to node server")
});
app.get("/products",(req,res)=>{
    res.json(products)
})


app.get('/products/:id',(req,res)=>{
    const product=products.find(p=>p._id===req.params.id);
    res.json(product)
})

const PORT=8080
app.listen(process.env.PORT || PORT,()=>{
    console.log(`server running on port ${process.env.NODE_ENV} Mode on port ${process.env.PORT}`.inverse)})