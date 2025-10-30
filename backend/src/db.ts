import mongoose, { mongo } from 'mongoose';
import { Schema } from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

mongoose.connect("mongodb+srv://raj:12345@cluster0.hr1druw.mongodb.net/BRAINLY")

const UserSchema = new Schema({

username:{type:String,unique:true},
email:{type:String,unique:true},
password:String

})

const BrainSchema = new Schema({

type:String,
URL:String,
tag:Array,
UserId:ObjectId

})

export const UserModel = mongoose.model('user',UserSchema)
export const BrainModel = mongoose.model('brain',BrainSchema)

