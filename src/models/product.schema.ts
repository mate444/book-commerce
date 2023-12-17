import * as Mongoose from "mongoose";
import { Product } from "src/types/product";

export const ProductSchema = new Mongoose.Schema<Product>({
    owner: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: String,
    description: String,
    image: String,
    price: String,
}, { timestamps: {} });
