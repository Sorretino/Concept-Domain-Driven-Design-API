import { Request, Response } from "express";
import DeleteAdmin from "~/Domain/UseCases/ManageAdmin/DeleteAdmin";

class DeleteAdminService {
  async handle(req: Request, res: Response) {
    const result = await DeleteAdmin.execute(req.params.id);
    res.status(200).json(result);
  }
}

export const deleteAdminService = new DeleteAdminService();
