/*eslint-disable*/
// @ts-ignore
import mongoose from "../index";
import { mongoosePagination, Pagination } from "mongoose-paginate-ts";


type LogType = mongoose.Document & {
  url: string;
  params: string;
  createdAt: Date;
};

/**
 * Admin schema for mongoose
 * @type {Schema}
 */
const LogSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    params: {
      type: String,
    },
  },
  { timestamps: true }
);
LogSchema.plugin(mongoosePagination);
const LogDB: Pagination<LogType> = mongoose.model<LogType, Pagination<LogType>>("Logs",LogSchema);
export default LogDB;
