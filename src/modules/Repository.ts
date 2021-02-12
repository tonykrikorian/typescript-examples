import axios from "axios";
import { IRepositoryGetItems } from "../interfaces/IRepository";

export default class Repository<T> implements IRepositoryGetItems<T> {
  async getAll<T>(url: string = "") {
    const { data } = await axios.get(url);
    const result: T[] = [...data];
    return result;
  }
}
