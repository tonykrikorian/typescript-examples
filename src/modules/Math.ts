import { IMath } from "../interfaces/IMath";

export default class Math implements IMath {
  sum(
    number1: number = 0,
    number2: number = 0,
    ...numbers: Array<number>
  ): number | undefined {
    if (numbers.length === 0) return this.sumNumbers(number1, number2);
    if (numbers.length > 0)
      return this.sumNumbersReduce(number1, number2, numbers);
  }

  sumArrayNumbers(ar: number[]): number {
    let result: number = ar.reduce(
      (prev: number, current: number) => prev + current
    );
    return result;
  }

  private sumNumbers(a: number, b: number): number {
    return a + b;
  }

  private sumNumbersReduce(
    a: number,
    b: number,
    numbers: Array<number>
  ): number {
    let result = numbers.reduce(
      (prevValue, currentValue) => prevValue + currentValue
    );
    return result + a + b;
  }
}
