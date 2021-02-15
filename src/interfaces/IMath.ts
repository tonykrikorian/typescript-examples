export interface IMath {
  sum: (
    number1: number,
    number2: number,
    ...numbers: Array<number>
  ) => number | undefined;

  sumArrayNumbers: (ar: number[]) => number;
}
