import express from "express";
//const express=require("express");
import notesRoutes from "./routes/notesRoutes.js";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

// console.log(process.env.MONGO_URI)

const app = express();
const PORT = process.env.PORT || 5001;

//connectDB(); -> Not a good way so implementation is below

//Middleware
app.use(express.json()); // This middleware is parse JSON Bodies: req.body
app.use(rateLimiter);
//Our simple Middle ware
// app.use((req,res,next) => {
//     console.log("We have got a request");
//     next();
// })

//Authentication Check
//Rate Limiting




app.use("/api/notes", notesRoutes);

// This is the good practise
connectDB().then(() =>{
    app.listen(PORT, ()=>{
        console.log("Server started on port 5001");
    });
})


