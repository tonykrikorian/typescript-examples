import { expect } from "chai";
import Timers from "../modules/Timers";

describe.skip("Testing Tiemers Class", () => {
  describe("Testing DelayFunction Method", () => {
    let timers: Timers;
    beforeEach(() => {
      timers = new Timers();
    });
    it("Testing async callback para retornar true en la callnback", (done) => {
      let success: boolean = true;
      let callback = (p1: boolean) => {
        success = p1;
        expect(success).to.be.true;
        done();
      };
      timers.DelayFunction(callback);
    });

    it("Testing function with promises", () => {
      return timers.PromisesFunction().then((total) => {
        expect(total).to.eq(400);
      });
    });
  });
});
