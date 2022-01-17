import { toast } from "react-toastify";
import api from "./api";

export function getById() {
  function apiCall({ path, id }) {
    return api.get(`${path}/${id}`);
  }
  function messageError(error) {
    return toast.error(error);
  }
  return { apiCall, messageError };
}
export function createNew() {
  function apiCall({ path, bodyData }) {
    return api.put(
      `${path}`,
      ` ${bodyData}`
    );
  }
  function messageError(error) {
    return toast.error(error);
  }
  return { apiCall, messageError };
}
