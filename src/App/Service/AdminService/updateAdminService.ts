import { Request, Response } from "express";
import UpdateAdmin from "~/Domain/UseCases/ManageAdmin/UpdateAdmin";

class UpdateAdminService {
  async handle(req: Request, res: Response) {
    const result = await UpdateAdmin.execute(req.params.id, req.body);
    res.status(200).json(result);
  }
}

export const updateAdminService = new UpdateAdminService();
