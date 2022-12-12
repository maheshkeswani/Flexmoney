const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const Connect = async () => {
  const URL  =  process.env.URL
  try {
    await mongoose.connect( URL,{
      useNewUrlParser: true
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with database : ", error);
  }
};
module.exports = Connect ; 