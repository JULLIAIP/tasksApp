import { Request, Response } from "express";

export default async function createUser(req: Request, res: Response) {
  try {
    //validar entradas da requisição
    //consultar BD
    //validar saidas do BD
    //encerrar requisição
  } catch (error) {
    res.status(400).send("algo deu errado");
  }
}
