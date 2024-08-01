import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    availability: {
        type: String,
        enum: ["IN STOCK", "OUT OF STOCK"],
        default: "IN STOCK"
    },
    rating: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    imagePath: {
        type: String
    }
});

export const Product = model('Product', productSchema);