import { User } from "../types/User";

export interface IRepositoryGetItems<T> {
  getAll: <T>(url: string) => Promise<T[]>;
}
