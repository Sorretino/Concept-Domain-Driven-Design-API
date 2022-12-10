import "dotenv/config";
import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";

//imports routes
import { AdminRequests } from "./Request";

class Api {
  public app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(AdminRequests);
  }
}

export const app = new Api().app;
