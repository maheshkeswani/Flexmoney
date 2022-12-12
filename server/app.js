const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const Connect = require('./db');
const dotenv = require('dotenv');
const user = require('./routes/route');
dotenv.config({path:'./config.env'})
const app = express();
Connect()

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/",user);
const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
