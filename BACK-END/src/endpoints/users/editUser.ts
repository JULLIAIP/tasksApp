import { Request, Response } from "express";
import upDateUser from "../../data/users/upDateUser";

export default async function editUser(req: Request, res: Response) {
  try {
    if (
      req.body.name === "" ||
      req.body.email === "" ||
      req.body.pass === "" ||
      req.body.gender === ""
    ) {
      res.status(400).send("Nenhum dos campos pode estar em branco");
      return;
    }
    if (
      !req.body.name &&
      !req.body.email &&
      !req.body.pass &&
      !req.body.gender
    ) {
      res.status(400).send("Não existem alterações para serem feitas");
    }
    await upDateUser(
      req.params.id,
      req.body.name,
      req.body.email,
      req.body.pass,
      req.body.gender
    );

    res.status(200).send("Usuário atualizado com sucesso");
    return;
  } catch (error) {
    res.status(400).send("aqui");
  }
}
