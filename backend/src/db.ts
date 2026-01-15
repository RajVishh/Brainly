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

title:String,
link:String,
tag:Array,
UserId:ObjectId

})

const LinkSchema = new Schema({
    randomLink:{type:String,unique:true},
    userId:{type:ObjectId,ref:'users',unique:true}

});

export const LinkModel = mongoose.model('link',LinkSchema)
export const UserModel = mongoose.model('user',UserSchema)
export const BrainModel = mongoose.model('brain',BrainSchema)

