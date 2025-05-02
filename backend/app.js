const express = require("express")
const cors = require("cors")
const bodyParser= require("body-parser")

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(require("./src/router/router"));

app.use(express.json());

app.listen(4000, ()=>{ 
    console.log("tamo redy");
})