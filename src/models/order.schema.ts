import * as Mongoose from "mongoose";
import { Order } from "../types/order";

export const OrderSchema = new Mongoose.Schema<Order>({
    owner: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    totalPrice: {
        type: Number,
        default: 0
    },
    products: [
        {
            product: {
                type: Mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            quantity: {
                type: Number,
                default: 0
            }
        }
    ],
}, { timestamps: {} });
