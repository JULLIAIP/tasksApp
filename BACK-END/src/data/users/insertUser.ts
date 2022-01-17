import { connection } from "../../index";
export default async function insertUser(
  id: string,
  name: string,
  email: string,
  gender: string,
  pass: string
) {
  await connection("tasks_app_users").insert({
    id,
    name,
    email,
    gender,
    pass,
  });
}
