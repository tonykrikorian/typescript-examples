import chai, { expect } from "chai";
import Math from "../modules/Math";
import {} from "chai-arrays";

const math = new Math();

describe("Unit testing Math Class", () => {
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
  describe("Sumar un array de enteros", () => {
    it("Sumar array de enteros positivos", () => {
      let values: number[] = [1, 2, 3, 4, 10, 11];
      let result: number = 31;
      expect(result).to.be.eq(math.sumArrayNumbers(values));
    });
  });
  describe("Test method compareArrayTripelts", () => {
    describe("Comparar arrays", () => {
      it("Comparar una triplet", () => {
        let a: number[] = [1, 2, 3];
        let b: number[] = [3, 2, 1];
        let expected: number[] = [1, 1];
        expect(expected).to.be.array();
      });
    });
  });
});
