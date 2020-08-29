const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 8080;
const about = require ('./JSON/about.json');
const portfolio = require ('./JSON/portfolio.json');

app.listen(port,()=>{
    console.log(`server on :${port}`)
})
app.get('/about',(req,res)=>{
    res.json(about)
});
app.get('/portfolio',(req,res)=>{
    res.json(portfolio)
});