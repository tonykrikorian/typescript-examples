import { IPerson } from "../interfaces/IPerson";

export default class Person implements IPerson {
  constructor(firstname: string, lastname: string, title: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.title = title;
  }

  static logFavoriteProtocol(): string {
    return "Building cool things";
  }
  firstname: string;
  lastname: string;
  title: string;

  getFullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }

  getFullPosition(): string {
    return `${this.title} ${this.getFullName()}`;
  }
}
