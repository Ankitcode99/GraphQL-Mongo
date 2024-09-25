const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })

        console.log(`Connection established with DB - ${conn.connection.host}`)
    } catch (error) {
        console.error(error)
    }
}


module.exports = connectDB;