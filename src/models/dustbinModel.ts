import mongoose from "mongoose";

const dustbinSchema = new mongoose.Schema({
    daddress:{
        type:String,
        required: true,
    },
    dcode:{
        type:mongoose.Types.ObjectId,
        required: true,
    },
    dward:{
        type:String,
        required: true
    }
})

export default dustbinSchema;