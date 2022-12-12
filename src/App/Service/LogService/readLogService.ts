import { Request, Response } from "express";
import GetLog from "~/Domain/UseCases/ManageLog/ReadLog";

class ReadLogService {
  async handle(req: Request, res: Response) {
    const result = await GetLog.all();
    res.status(200).json(result);
  }
}

export const readLogService = new ReadLogService();
