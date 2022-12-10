import { Router } from "express";
import { createAdminService, readAdminService } from "../Service/AdminService";

const AdminRequests = Router();

AdminRequests.get("/admin", readAdminService.handle);
AdminRequests.post("/admin", createAdminService.handle);

export default AdminRequests;
