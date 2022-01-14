import { connection } from "../../index";
export default async function insertTasks(
  id: string,
  title: string,
  description: string,
  hour: string,
   team: number,
   card_id: string,
 
  
) {
  await connection("tasks_app_tasks").insert({
    id,
    title,
    description,
    hour,
    team,
    card_id,
  });
}
