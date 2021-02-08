export interface IPerson {
  firstname: string;
  lastname: string;
  title: string;

  getFullName: () => string;
  getFullPosition: () => string;
}
