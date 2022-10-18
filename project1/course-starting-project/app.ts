// Decorators to class
function Logger(constructor: Function) {
  console.log("Logging.");
  console.log(constructor);
}

// using decorator factory : advantage is we can pass in values inside
function Logger1(logString: string) {
  console.log("Logger func");

  return function (constructor: Function) {
    console.log(constructor, "logger");
    console.log(logString);
  };
}

function withTemplate(template: string, hookId: string) {
  console.log("Template fun");

  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    console.log(constructor, "template");

    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger
@Logger1("Person-1")
@withTemplate("<h1>First page</h1>", "app")
class Person {
  name = "mani";

  constructor() {
    console.log("Creating person object");
  }
}

const pers = new Person();

console.log(pers);

// ** Property decorator
console.log("********Property Decorator*********");
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator");
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

  constructor(t: string, p: number) {
    (this.title = t), (this._price = p);
  }

  set setPrice(n: number) {
    if (n > 0) {
      this._price = n;
    } else {
      throw new Error("Invalid price");
    }
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
