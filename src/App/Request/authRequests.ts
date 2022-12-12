import { Router } from "express";
import { authenticateService } from "../Service/AuthService";

const AuthRequests = Router();

AuthRequests.post("/login", authenticateService.handle);

export default AuthRequests;
