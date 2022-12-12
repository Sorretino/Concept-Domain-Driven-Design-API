import { Request, Response } from "express";
import CreateAdmin from "~/Domain/UseCases/ManageAdmin/CreateAdmin";
//Domain/UseCases/ManageAdmin/CreateAdmin

class CreateAdminService {
  async handle(req: Request, res: Response) {
    const result = await CreateAdmin.execute(req.body);
    res.status(200).json(result);
  }
}

export const createAdminService = new CreateAdminService();
