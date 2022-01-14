import knex from "knex";
import dotenv from "dotenv";
import express from "express";
import createUser from "./endpoints/users/createUser";
import getUserById from "./endpoints/users/getUser";
import editUser from "./endpoints/users/editUser";
import createCard from "./endpoints/cards/createCard";
import createTask from "./endpoints/tasks/createTask";
import getCardById from "./endpoints/cards/getCard";
import getTaskById from "./endpoints/tasks/getTask";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306,
  },
});

export const app = express();
app.use(express.json());
//GET
app.get("/user/:id", getUserById);
app.get("/card/:id", getCardById);
app.get("/task/:id", getTaskById);

//PUT
app.put("/user", createUser);
app.put("/cards", createCard);
app.put("/task", createTask);

//POST
app.post("/user/:id", editUser);
app.post("/card/:id");
app.post("/task/:id");

//DELETE
app.delete("/user/:id");
app.delete("/card/:id");
app.delete("/task/:id");

app.listen(3003, () => {
  console.log("servidor rodando na porta 3003");
});
