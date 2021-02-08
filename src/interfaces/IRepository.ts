export interface IRepository<T> {
  getAll: () => Array<T>;
  getItem: (id: number) => T;
  addItem: (item: T) => T;
}
