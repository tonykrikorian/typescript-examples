import { expect } from "chai";
import Person from "../modules/Person";

describe.skip("Person Class", () => {
  //Se ejecuta antes de cada test
  beforeEach(() => {
    console.log("Before each test");
  });

  //Se ejecuta despues de cada test
  afterEach(() => {
    console.log("After each test");
  });

  //Antes de terminar la ejecución de todos los test
  before(() => {
    console.log("Before all test executed");
  });

  //Despues de terminar la ejecución de todos los test
  after(() => {
    console.log("After all test executed");
  });

  describe("Get Fullname", () => {
    let person: Person;
    beforeEach(() => {
      person = new Person("Tony", "Krikorian", "Architect");
    });

    it("Get full name", () => {
      let result = "Tony Krikorian";
      expect(result).to.be.eq(person.getFullName());
    });
    it("Get Fullname + position", () => {
      let result = "Architect Tony Krikorian";
      expect(result).to.be.eq(person.getFullPosition());
    });
    it("Get cool things we are building", () => {
      let success = "Building cool things";
      expect(success).to.eq(Person.logFavoriteProtocol());
    });
  });
});
