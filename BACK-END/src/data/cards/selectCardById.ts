import { connection } from "../../index";
export default async function selectCardById(
    id: string
    ) {
  const result = await connection("tasks_app_cards")
  .select("*")
  .where({id});
  return result[0];
}
