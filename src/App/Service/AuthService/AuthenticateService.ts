import { Request, Response } from "express";
import Authentication from "~/Domain/UseCases/Authentication";

class AuthenticateService {
  async handle(req: Request, res: Response) {
    const result = await Authentication.execute(req.body);
    res.status(200).json(result);
  }
}

export const authenticateService = new AuthenticateService();
