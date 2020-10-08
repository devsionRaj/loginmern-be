const mongoose = require('mongoose');
const dbURI = `${process.env.DB_PROTOCOL}://${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const connect = async function () {
    await mongoose.connect(dbURI, { useNewUrlParser: true }).then(() => {
        console.log(`MongoDB connected to the URL: ${dbURI}`)
    }), (error) => {
        console.log(`MongoDB connection error:`, error)
    }
}

module.exports = {
    connect
}