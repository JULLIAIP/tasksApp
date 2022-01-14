import { Request, Response } from "express";
import { uuid } from "uuidv4";
import insertCard from "../../data/cards/insertCard";

export default async function createCard(
  req: Request, 
  res: Response
  ) {
  try {
    if (!req.body.title) {
      res.status(400).send("O título do cartão não pode ser vazio");
      return;
    }
    if (!req.body.author_id) {
      res.status(400).send("Você não mandou o ID do autor");
      return;
    }
    const id: string = uuid();

    await insertCard(
      id, 
      req.body.title, 
      req.body.author_id
      );
    res.status(200).send("Cartão Criado com Sucesso");
  } catch (error) {
    res.status(400).send({ error });
  }
}
