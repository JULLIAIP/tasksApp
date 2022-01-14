import { Request, Response } from "express";
import selectCardById from "../../data/cards/selectCardById";

export default async function getCardById(req: Request, res: Response) {
  try {
    const card = await selectCardById(req.params.id);
    if (!card) {
      res.status(404).send("Cartão Não Encontrado");
    }

    res.status(200).send({ id: card.id, title: card.title, author_id: card.author_id });
  } catch (error) {
    res.status(400).send("aqui");
  }
}
