import { Request, Response } from "express";
import getAdmins from "../../../Domain/UseCases/ManageAdmin/GetAdmin";

class ReadAdminService {
  async handle(req: Request, res: Response) {
    const result = await getAdmins.all();
    res.status(200).json(result);
  }
}

export const readAdminService = new ReadAdminService();
