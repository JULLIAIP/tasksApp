import { Request, Response } from "express";
import { uuid } from "uuidv4";
import insertTasks from "../../data/tasks/insertTask";

export default async function createTask(req: Request, res: Response) {
  try {
    if (
      !req.body.title ||
      !req.body.description ||
      !req.body.hour ||
      !req.body.card_id
    ) {
      res
        .status(400)
        .send(
          "Verifique se os campos título, description E tempo são obrigatórios"
        );
      return;
    }
    const id: string = uuid();

    await insertTasks(
      id,
      req.body.title,
      req.body.description,
      req.body.hour,
      req.body.team,
      req.body.card_id
    );
    res.status(200).send("Tarefa Criada com Sucesso");
  } catch (error) {
    res.status(400).send({ error });
  }
}
