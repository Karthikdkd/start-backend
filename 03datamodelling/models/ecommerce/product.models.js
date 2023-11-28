import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    description: {
        required: true,
        typeof: String
    },
    name: {
        required: true,
        type: String
    },
    image: {
        type: String,   //  images are able to store in mongoDB in  buffer format. But it makes in DB. Hence uploaded in 3rd party like AWS, cloudnary and url of that data is given in this for frontend
    },
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, // here the type is another model. this is the syntax to refer other model
        ref: "Category", // to which model we are referring to
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {});

export const Product = mongoose.model('Product',productSchema);