import { Request, Response } from "express";
import getAdmin from "~/Domain/UseCases/ManageAdmin/GetAdmin";

class FindAdminService {
  async handle(req: Request, res: Response) {
    const result = await getAdmin.byId(req.params.id);
    res.status(200).json(result);
  }
}

export const findAdminService = new FindAdminService();
