const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const Connect = async () => {
  const URI  =  process.env.MONGO_URI
  try {
    await mongoose.connect( URI,{
      useNewUrlParser: true
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with database : ", error);
  }
};
module.exports = Connect ;