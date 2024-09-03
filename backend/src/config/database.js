const mongoose = require('mongoose');
require('dotenv').config()

exports.database = () =>{
    const url = process.env.MONGO_URL;

    mongoose.connect(url)
    .then(() =>{
        console.log('Connected to database');
    })
    .catch((error) =>{
        console.log(error);
        console.log('Cannot connect to database');
        process.exit(1);
    })
}
