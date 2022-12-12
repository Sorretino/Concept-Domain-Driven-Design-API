import { Router } from "express";
import { marvelService } from "../Service/MarvelService";

const MarvelRequests = Router();

MarvelRequests.get("/marvel", marvelService.getCharacters);
MarvelRequests.get("/marvel/:id", marvelService.getCharacter);

export default MarvelRequests;
