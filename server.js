const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");



const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`listning on port no ${PORT}`);
});

const staticpath = path.join(__dirname,"/public");
app.use(express.static(staticpath));


app.set("view engine" , "hbs");

const partialspath = path.join(__dirname,"/partials");
// console.log(partialspath);
hbs.registerPartials(partialspath);










app.get("/",(req,res)=>{
res.send("hiii from home sections");
});
app.get("/about",(req,res)=>{
   res.render("about");
    });
    app.get("/weather",(req,res)=>{
res.render("weather");
});
app.get("*",(req,res)=>{
    res.send("404 error");
    });