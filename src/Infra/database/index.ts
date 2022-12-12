import "dotenv/config";
import mongoose from "mongoose";
// @ts-expect-error
mongoose.set("strictQuery", true), mongoose.connect(process.env.DATABASE_URL), module.exports = mongoose;
