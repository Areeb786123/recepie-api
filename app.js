const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require("./config/dbConnection")
const dotenv = require('dotenv').config();
const app = express();

connectDb();
app.get('/', (req, res)=> {
    res.status(200).json({"message": "welcome to home page "})
})

app.use(express.json());
app.use('/api/recepie', require("./routes/recepie"));

//adding middleware 
app.use(errorHandler)

const port = process.env.PORT ||  3000 ;
app.listen(port, () => {
    console.log(`listening in port ${port}`);
});