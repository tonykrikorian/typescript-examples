export interface IRepositoryGetItems<T> {
  getAll: () => Promise<Array<T>>;
  getItem: (id: number) => Promise<T>;
}
