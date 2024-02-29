const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();



// Database Connection
const dbConnect = require("./database/dbConnect");
dbConnect();




//Using Services
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());




// Getting Routes From routes Folder
const blog = require("./routes/blogRoute")
// const user = require("./routes/authRoute");



// Defining Routes API
app.get("/", (req, res) => {
    res.json(` >>>>>Server is Running on port`);

});
app.use("/api/v1/blog", blog)
// app.use("/api/v1/auth", user)











// Establishing Connection 
const port = 8080;
app.listen(port, () => {
    console.log("listening on port " + port);
})