import { Router } from "express";
import { readLogService } from "../Service/LogService";

import authMidleware from "~/Infra/Midlewares/authMidleware";
const LogRequests = Router();

LogRequests.get("/logs", authMidleware.handle, readLogService.handle);

export default LogRequests;
