import Person from "./modules/Person";
import Math from "./modules/Math";
let firstanme: string = "Tony";

let value: any = 6;
let result: string = (<number>value).toFixed(2);
console.log(firstanme, result);

function sumNumbers(a: number = 0, b: number = 0): string | number {
  let result: number = a + b;
  return (<number>result).toFixed(2);
}

console.log(sumNumbers());

// const employee: Person = new Person("Tony", "Krikorian", "Enginnier");

const employees: Array<Person> = [
  new Person("Tony", "Krikorian", "Enginnier"),
  new Person("Tarin", "Gonzalez", "Teacher"),
];

employees.forEach((value) => console.log(value.getFullPosition()));

const calcular: Math = new Math();
console.log(calcular.sum(1, 2, 3, 4));
