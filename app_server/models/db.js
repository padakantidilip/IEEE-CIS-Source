const mongoose = require('mongoose');

//Connecting to DataBase 
//dbURI = "mongodb+srv://admin:ieeecisau@ieeecisaudatabase.dfqq6aw.mongodb.net/?retryWrites=true&w=majority"
const dbURI = "mongodb+srv://admin:ieeecisau@ieeecisaudatabase.dfqq6aw.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURI);
//Display Status

mongoose.connection.on("connected", () =>{
    console.log("Connected to DataBase");
});

mongoose.connection.on("error", () =>{
    console.log("Error Connecting to DataBase");
});

mongoose.connection.on("disconnected", () =>{
    console.log("Disconnected from DataBase");
});

