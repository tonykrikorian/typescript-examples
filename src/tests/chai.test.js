const expected = require("chai").expect;

describe.skip("Ejemplos de unit testing con Chai", () => {
  describe("Ejemplos Basicos Chai", () => {
    it("Is true", () => {
      let result = true;
      expected(result).to.be.true;
    });
  });
});
