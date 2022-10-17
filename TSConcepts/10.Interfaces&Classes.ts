// using type
type Person = {
  name: string;
  age: number;
  greet(phrase: string): void;
};

// using interface
// interface Person {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
// }

let person1: Person;
person1 = {
  name: "mani",
  age: 12,
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi");
    }
  },
};

person1.greet("Hi");

// inheritance in interface
interface Named {
  name?: string;
  // adding optional property same can be implemented in class properties also
  outputName?: string;
}

// using interface in class
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person1 implements Greetable {
  name?: string;
  age = 30;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string): void {}
}

let p1: Greetable;
p1 = new Person1();

// interface as funciton types
// using type
// type addFn=(a:number,b:number)=>number
// using interface
interface addFn {
  (a: number, b: number): number; //not arrow
}

const add: addFn = (a: number, b: number) => {
  return a + b;
};

console.log(add(1, 2));
