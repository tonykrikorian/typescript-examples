/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
import chai from "chai";
import Math from "../modules/Math";

const assertArrays = require("chai-arrays");

chai.use(assertArrays);

describe("Test Math Class", () => {
  describe("Test Compare triplets method", () => {
    let math: Math;
    beforeEach(() => {
      math = new Math();
    });
    it("Test compare simplet triplets", () => {
      const tests = [
        {
          a: [1, 2, 3],
          b: [3, 2, 1],
          expected: [1, 1],
        },
        {
          a: [17, 28, 30],
          b: [99, 16, 8],
          expected: [2, 1],
        },
      ];
      tests.forEach(({ a, b, expected }) => {
        chai.expect(expected).to.equalTo(math.compareArrayTripelts(a, b));
        chai.expect(expected).to.ofSize(2);
      });
    });
    it("Sumar array de enteros positivos", () => {
      const values: number[] = [1, 2, 3, 4, 10, 11];
      const result: number = 31;
      chai.expect(result).to.eq(math.sumArrayNumbers(values));
    });
  });

  describe("Test aVeryBigSum function", () => {
    let math: Math;
    beforeEach(() => {
      math = new Math();
    });
    it("aVeryBigSum sum testing", () => {
      const expected: number = 5000000015;
      const numbers: number[] = [
        1000000001,
        1000000002,
        1000000003,
        1000000004,
        1000000005,
      ];

      chai.expect(expected).to.eq(math.aVeryBigSum(numbers));
    });
  });
});
