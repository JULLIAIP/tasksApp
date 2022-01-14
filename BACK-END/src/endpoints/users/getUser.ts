import { Request, Response } from "express";
import selectUserById from "../../data/users/selectUserById";

export default async function getUserById(req: Request, res: Response) {
  try {
    const user = await selectUserById(req.params.id);
    if (!user) {
      res.status(404).send("Usuário Não Encontrado");
    }

    res.status(200).send({ id: user.id, name: user.name, gender: user.gender });
  } catch (error) {
    res.status(400).send("aqui");
  }
}
