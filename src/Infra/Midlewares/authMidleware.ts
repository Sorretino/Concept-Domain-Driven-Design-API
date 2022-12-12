import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { promisify } from "util";
import { secret } from "~/Infra/config/auth";

type secret = {
  secret: string;
};
const authMidleware = {
  async handle(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro , precisa fazer login para acessar a pagina ",
      });
    }

    const [, token] = authHeader.split(" ");
    if (!token) {
      return res.status(400).json({
        mesagem: "Erro , precisa fazer login para acessar a pagina falta o token",
      });
    }
    // try validar token se existe
    try {
      const decoded: any = await promisify(jwt.verify)(token, secret);
      if (!decoded) {
        return res.status(401).json({
          message: "O token está expirado!",
        });
      }
      //req.user_id = decoded.id;
      req.user = { id: decoded.id };
      next();
    } catch {
      return res.status(401).json({
        message: "O token está inválido!",
      });
    }
  },
};

export default authMidleware;
