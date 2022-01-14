import { connection } from "../../index";
export default async function insertCard(
  id: string,
  title: string,
  author_id: string
) {
  await connection("tasks_app_cards").insert({
    id,
    title,
    author_id,
  });
}
