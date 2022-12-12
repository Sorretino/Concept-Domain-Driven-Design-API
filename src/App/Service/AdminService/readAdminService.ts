import { Request, Response } from "express";
import GetAdmin from "~/Domain/UseCases/ManageAdmin/GetAdmin";

class ReadAdminService {
  async handle(req: Request, res: Response) {
    const result = await GetAdmin.all();
    res.status(200).json(result);
  }
}

export const readAdminService = new ReadAdminService();
