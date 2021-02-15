/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
export interface IRepositoryGetItems<T> {
  getAll: <T>(url: string) => Promise<T[]>;
}
