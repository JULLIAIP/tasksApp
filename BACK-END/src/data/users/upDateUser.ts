import { connection } from "../../index";
export default async function upDateUser(
  id: string,
  name?: string,
  email?: string,
  pass?: string,
  gender?: string
) {
    //implementação do método RAW
  if (name) {
    await connection.raw(`
        
        UPDATE tasks_app_users
        SET name = '${name}'
        WHERE id - '${id}'
        
        `);
  }
  if (email) {
    await connection.raw(`
        
        UPDATE tasks_app_users
        SET email = '${email}'
        WHERE id - '${id}'
        
        `);
  }
  if (pass) {
    await connection.raw(`
        
        UPDATE tasks_app_users
        SET pass = '${pass}'
        WHERE id - '${id}'
        
        `);
  }
  if (gender) {
    await connection.raw(`
        
        UPDATE tasks_app_users
        SET gender = '${gender}'
        WHERE id - '${id}'
        
        `);
  }
}
