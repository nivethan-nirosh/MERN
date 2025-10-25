import mongoose from 'mongoose';
//const mongoose = require('mongoose');

export const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB CONNECTED SUCCESSFULLY");

    }catch(error){
        console.error("Error connecting MongoDB",error);
        process.exit(1);

    }
};