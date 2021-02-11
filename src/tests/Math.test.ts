import { expect } from "chai";
import Math from "../modules/Math";

const math = new Math();

describe.skip("Unit testing Math Class", () => {
  describe("Sum Method", () => {
    it("Sum two numbers", () => {
      let result = 12;

      expect(result).to.be.eq(math.sum(5, 7));
    });
    it("Sum N numbers", () => {
      let result = 28;
      expect(result).to.be.eq(math.sum(1, 2, 3, 4, 5, 6, 7));
    });
    it("Sum numbers no parameters", () => {
      let result = 0;
      expect(result).to.be.eq(math.sum());
    });
  });
});
