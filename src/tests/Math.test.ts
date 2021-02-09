import { expect } from "chai";
import Math from "../modules/Math";

describe("Unit testing Math Class", () => {
  describe("Sum Method", () => {
    it("Sum two numbers", () => {
      let result = 12;
      const math = new Math();
      expect(result).to.be.eq(math.sum(5, 7));
    });
  });
});
