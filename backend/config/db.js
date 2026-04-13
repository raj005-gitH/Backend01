const mongoose = require("mongoose");
let url = "mongodb://localhost:27017/backendDB";

//MVC Model

const connectDB = async () => {    

    try {
        await mongoose.connect(url);
        console.log("MongoDB connected Successfully");
    } catch(e) {
        console.log(`Some error occures: ${e}`);
    }
}

module.exports = connectDB;