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
      const a: number[] = [1, 2, 3];
      const b: number[] = [3, 2, 1];
      const expected: number[] = [1, 1];

      chai.expect(expected).to.equalTo(math.compareArrayTripelts(a, b));
      chai.expect(expected).to.ofSize(2);
    });
  });
});
