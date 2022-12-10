/*eslint-disable*/
// @ts-ignore
import mongoose from "../index";
import { mongoosePagination, Pagination } from "mongoose-paginate-ts";
//import Admin from "../../../Domain/Entities/Admin";
const emailMatch = [/([a-z0-9_\-\.])+@([a-z0-9_\-\.])+\.([a-z0-9])+/i, "No email found ({VALUE})"];

type AdminType = mongoose.Document & {
  name: string;
  email: string;
  password: string;
  active: boolean;
  createdAt: Date;
};

/**
 * Admin schema for mongoose
 * @type {Schema}
 */
const AdminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      minlength: 5,
      maxlength: 255,
      required: true,
      unique: true,
      lowercase: true,
      match: emailMatch,
      trim: true,
    },
    password: {
      type: String,
      maxlength: 100,
      minlength: 5,
      required: true,
      select: false,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
//AdminSchema.plugin(mongoosePagination);
const AdminDB: Pagination<AdminType> = mongoose.model<AdminType, Pagination<AdminType>>("Admin", AdminSchema);
//const AdminDB = mongoose.model("Admin", AdminSchema);
export default AdminDB;
