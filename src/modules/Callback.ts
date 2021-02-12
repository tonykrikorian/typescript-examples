import { ICallback } from "../interfaces/ICallback";
import { User } from "../types/User";
import axios from "axios";

function getBooksCategory(cat: string, callback: ICallback): void {}

export async function getUsersFromBackend<T>(): Promise<T[]> {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const result: T[] = [...data];
  return result;
}
