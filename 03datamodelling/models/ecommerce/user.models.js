import mongoose from 'mongoose';


// create a neew schema
// 1st parameter -> schema object
// 2nd parameter -> timestamps -> createdAt, updatedAt are appended to automatically generated

// simple schema without any properties
const userNoPropertiesSchema = new Schema({
    userName: String,
    emailId: String,
    password: String
},{timestamps: true});

// schema with properties for fields

const userSchema = new mongoose.Schema({
    userName: {
        type: String,   // these are properties of the node.
        required: true,
        unique: true,
        lowercase: true
    },
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
}, {timestamps: true});


// "User" -> this model name is stored in mongoDB as "users" -> appends s and lowercase
// keep the expoting constant name and model name in mongoDB same -> not necessarily but good practice
export const User = mongoose.model('User', userSchema);