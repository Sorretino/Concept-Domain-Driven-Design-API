import type { Request, Response } from "express";
import "dotenv/config";
import CreateLog from "~/Domain/UseCases/ManageLog/CreateLog";
import api from "~/Infra/services/apiMarvel";
import { LogProps } from "~/Shared/PropTypes/LogProps";

const MARVEL_SEC: string = process.env.MARVEL_SEC ?? "";

class MarvelService {
  async getCharacters(req: Request, res: Response) {
    const { offset, limit } = req.query;
    const URI = `characters${MARVEL_SEC}&offset=${offset || 0}&limit=${limit || 20}`;
    const { data } = await api.get(URI);
    const props: LogProps = {
      url: "characters",
      params: `offset=${offset || 0} | limit=${limit || 20}`,
    };
    await CreateLog.execute(props);
    res.status(200).json(data);
  }

  async getCharacter(req: Request, res: Response) {
    const { id } = req.params;
    const { data } = await api.get(`characters/${id}${MARVEL_SEC}`);
    const props: LogProps = {
      url: `characters/${id}`,
      params: "",
    };
    await CreateLog.execute(props);
    res.status(200).json(data);
  }
}

export const marvelService = new MarvelService();
