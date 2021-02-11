export default class Timers {
  DelayFunction(callback: (param1: boolean) => void): void {
    setTimeout(() => {
      callback(true);
    }, 50);
  }

  PromisesFunction(): Promise<number> {
    let p: Promise<number> = new Promise((resolve, reject) => {
      resolve(400);
    });
    return p;
  }
}
