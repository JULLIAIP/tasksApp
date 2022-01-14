import { connection } from "../../index";
export default async function insertUser(
  id: string,
  name: string,
  email: string,
  pass: string,
  gender: string
) {
  await connection("tasks_app_users").insert({
    id,
    name,
    email,
    pass,
    gender,
  });
}
