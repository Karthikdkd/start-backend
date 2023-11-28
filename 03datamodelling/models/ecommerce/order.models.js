import mongoose from "mongoose";

const orderItemSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
});

const orderSchema = mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    }, 
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Use"
    },
    orderItems: {
        type: [orderItemSchema]
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"], // restring the input values to these 3 only
        default: "PENDING"
    }
},{timestamps: true});

export const Order = mongoose.model('Order', orderSchema);