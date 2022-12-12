const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const Connect = require('./db');
const dotenv = require('dotenv');
const user = require('./routes/route');
dotenv.config()
const app = express();
Connect()

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/",user);


app.listen(process.env.PORT|| 5000, () => console.log(`Server is running on ${process.env.PORT||5000}`));
