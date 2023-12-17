import * as Mongoose from "mongoose";
import { User } from "../types/user";

export const UserSchema = new Mongoose.Schema<User>({
    name: String,
    password: String,
    seller: {
        type: Boolean,
        default: false
    },
    address: {
        addr1: String,
        addr2: String,
        city: String,
        state: String,
        country: String,
        zipCode: String
    },
}, { timestamps: {} });
