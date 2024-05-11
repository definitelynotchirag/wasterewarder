import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userId : {
        type: String,
        required: true,
        unique: true
    },
    dustbins:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:'dustbins',
        default:[]
        }
    ]
})

export default userSchema;