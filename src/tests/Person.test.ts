import { expect } from "chai";
import Person from "../modules/Person";

describe("Person Class", () => {
  describe("Get Fullname", () => {
    const person = new Person("Tony", "Krikorian", "Architect");
    it("Get full name", () => {
      let result = "Tony Krikorian";
      expect(result).to.be.eq(person.getFullName());
    });
    it("Get Fullname + position", () => {
      let result = "Architect Tony Krikorian";
      expect(result).to.be.eq(person.getFullPosition());
    });
  });
});
