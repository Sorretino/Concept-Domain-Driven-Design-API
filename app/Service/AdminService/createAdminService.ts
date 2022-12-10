import { Request, Response } from "express";
import saveAdmin from "../../../Domain/UseCases/ManageAdmin/SaveAdmin";

class CreateAdminService {
  async handle(req: Request, res: Response) {
    const result = await saveAdmin.save(req.body);
    res.status(200).json(result);
  }
}

export const createAdminService = new CreateAdminService();
