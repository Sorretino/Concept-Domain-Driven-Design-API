import { Router } from "express";
import {
  createAdminService,
  readAdminService,
  findAdminService,
  updateAdminService,
  deleteAdminService,
} from "~/App/Service/AdminService";

import authMidleware from "~/Infra/Midlewares/authMidleware";

const AdminRequests = Router();

AdminRequests.get("/admin", authMidleware.handle, readAdminService.handle);
AdminRequests.get("/admin/:id", authMidleware.handle, findAdminService.handle);
AdminRequests.post("/admin", createAdminService.handle);
AdminRequests.put("/admin/:id", authMidleware.handle, updateAdminService.handle);
AdminRequests.delete("/admin/:id", authMidleware.handle, deleteAdminService.handle);

export default AdminRequests;
// import { Router } from "express";
// import {
//   createAdminService,
//   readAdminService,
//   findAdminService,
//   updateAdminService,
//   deleteAdminService,
// } from "~/App/Service/AdminService";

// const AdminRequests = Router();

// AdminRequests.get("/admin", readAdminService.handle);
// AdminRequests.get("/admin/:id", findAdminService.handle);
// AdminRequests.post("/admin", createAdminService.handle);
// AdminRequests.put("/admin/:id", updateAdminService.handle);
// AdminRequests.delete("/admin/:id", deleteAdminService.handle);

// export default AdminRequests;
