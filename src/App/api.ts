import "dotenv/config";
import type { Application } from "express";
import express from "express";
import cors from "cors";

// imports routes
import { AuthRequests, AdminRequests, MarvelRequests } from "./Request";

class Api {
  public app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      res.header("Access-Control-Allow-Headers", "*");
      this.app.use(cors());
      next();
    });
  }

  routes() {
    this.app.use(AuthRequests);
    this.app.use(AdminRequests);
    this.app.use(MarvelRequests);
  }
}

export const { app } = new Api();
