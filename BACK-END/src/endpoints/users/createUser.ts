import { Request, Response } from "express";
import { uuid } from "uuidv4";
import insertUser from "../../data/users/insertUser";

export default async function createUser(
  req: Request, 
  res: Response
  ) {
  try {
    if (!req.body.name || !req.body.email || !req.body.pass) {
      res
        .status(400)
        .send(
          "Verifique se os campos NAME, EMAIL E PASSWORD estão preencdidos"
        );
        return
    }
    const id: string = uuid();

    await insertUser(
      id,
      req.body.name,
      req.body.email,
      req.body.pass,
      req.body.gender
    );
    res.status(200).send("Usuário Criado com Sucesso");
  } catch (error) {
    res.status(400).send({ error });
  }
}
