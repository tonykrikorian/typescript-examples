/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable import/extensions */
/* eslint-disable lines-between-class-members */
/* eslint-disable import/no-unresolved */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
import { IMath } from "../interfaces/IMath";

export default class Math implements IMath {
  compareArrayTripelts(a: number[], b: number[]): number[] {
    // let a = [1, 2, 3];
    // let b = [3, 2, 1];
    let result: number[] = [];
    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) result.push(1);
      if (a[i] < b[i]) result.push(1);
    }
    return result;
  }
  sum(
    number1: number = 0,
    number2: number = 0,
    ...numbers: Array<number>
  ): number | undefined {
    if (numbers.length === 0) return this.sumNumbers(number1, number2);
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
