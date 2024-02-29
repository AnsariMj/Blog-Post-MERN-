const mongoose = require('mongoose');
require('dotenv').config();
const dbConnect = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB_URL, {});

        // console.log(connection);
        console.log("Database connection established");

    } catch (error) {
        console.log(" Database connection error" + error.message);

    }
}
module.exports = dbConnect;