import { connection } from "../../index";
export default async function selectUserById(
    id: string
    ) {
  const result = await connection("tasks_app_users")
  .select("*")
  .where({id});
  return result[0];
}
