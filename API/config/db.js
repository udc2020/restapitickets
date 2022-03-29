const mongoose = require("mongoose")

const connectDateBase =  () => {

   try {
      const conn =  mongoose.connect(process.env.MONGO_URI).connection
      console.error(`connect to DB`)
   } catch (error) {
      console.log(error)
      process.exit(1)
   }

}


module.exports = connectDateBase