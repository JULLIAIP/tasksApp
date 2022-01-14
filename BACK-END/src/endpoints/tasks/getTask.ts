import { Request, Response } from "express";
import selectTaskById from "../../data/tasks/selectTaskById";

export default async function getTaskById(req: Request, res: Response) {
  try {
    const task = await selectTaskById(req.params.id);
    if (!task) {
      res.status(404).send("Tarefa Não Encontrada");
    }

    res
      .status(200)
      .send({
        id: task.id,
        title: task.title,
        description: task.description,
        hour: task.hour,
        team: task.team,
        card_id: task.card_id,
      });
  } catch (error) {
    res.status(400).send("aqui");
  }
}
