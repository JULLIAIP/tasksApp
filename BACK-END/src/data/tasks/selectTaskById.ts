import { connection } from "../../index";
export default async function selectTaskById(
    id: string
    ) {
  const result = await connection("tasks_app_tasks")
  .select("*")
  .where({id});
  return result[0];
}
