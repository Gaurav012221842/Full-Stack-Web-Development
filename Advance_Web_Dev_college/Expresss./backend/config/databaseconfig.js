const mongoose=require('mongoose');
const Mongodb_rul="mongodb://localhost:20313/myDatbae";
const databaseconnect=() => {
    mongoose
        .connect(Mongodb_rul);
        .then(conn)=>console.log(`Connected to DB:${conn.connect.host} `);
        
}