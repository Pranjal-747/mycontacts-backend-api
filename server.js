const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");
const app = express();

connectDb();

app.use(express.json());

const port = process.env.PORT || 5000;
app.use("/api/contacts",require("./routes/contactRoutes"));
app.listen(port,()=>{
  console.log(`Server running on port - ${port}`);
})