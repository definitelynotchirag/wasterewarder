import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!);
        console.log("DB Connected");
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log("Mongoose is Connected");
        })
        connection.on('error',(err) => {
            console.log('MongoDB Connection Error:' +err);
            process.exit();
        })
    } catch(error){
        console.log("Error");
        console.log(error);
    }
}