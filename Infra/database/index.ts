import "dotenv/config";
import mongoose from "mongoose";
//@ts-ignore
mongoose.set("strictQuery", true), mongoose.connect(process.env.DATABASE_URL), (module.exports = mongoose);
