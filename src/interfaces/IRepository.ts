export interface IRepositoryGetItems<T> {
  getAll: <T>() => Promise<void>;
  // getItem: (id: number) => Promise<T>;
}
