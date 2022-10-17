// Using Interception
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// will have properties of both types
// intersection applicable to interface also
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "mani",
  privileges: ["read"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

// intersection takes only common union value
type Universal = Combinable & Numeric;

// function overloading JS combines both functions declarations
// function add(a: number): number; // also possible if b is marked as optional
function add(a: number, b: string): string;
function add(a: number, b: number): number; // all combinations possible
function add(a: Combinable, b: Combinable) {
  // following check is called typeguards because it ensures code runs correct at runtime
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

console.log(add(1, "2"));

// typeguard example2
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("name ", emp.name);
  // if(emp.privileges) not allowed use only in
  if ("privileges" in emp) {
    console.log("privileges", emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("startDate", emp.startDate);
  }
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: "emp2", startDate: new Date() });

class Car {
  drive() {
    console.log("driving");
  }
}

class Truck {
  drive() {
    console.log("driving a truck");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // can also use instance of
  // if ("loadCargo" in vehicle) {
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(12);
  }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated union
interface Bird {
  // type discrinator
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

// cannot use in and instanceof since horse and bird will not be compiled
function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving speed of animal: ", speed);
}

moveAnimal({ type: "bird", flyingSpeed: 100 });

// type casting : TS couldn't find the type of the element unless we mention it explicitly
// ts recognises this as a html element not as input element so we cann't access the values
// const userInput = <HTMLInputElement>document.getElementById("user-input")!;
// another way
const userInput = document.getElementById("user-input");

if (userInput) {
  (userInput as HTMLInputElement).value = "Jey";
}

// index and properties
interface ErrorContainer {
  // {email:'not a valid email',username:'must start with character'}
  // id: number; not possible since we use index
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "not a valid email",
};

// **Optional Checking
const fetchedUserData = {
  name: "mani",
  job: { title: "CEO" },
};

// optional Chaining
console.log(fetchedUserData?.job?.title);

// nullish coeleshing
const userInput1 = undefined;
// const userInput1 = "d"; // will return d
// if userInput1 is undefined or null nullish coelescence returns only default value
const storedData = userInput1 ?? "DEFAULT";
console.log(storedData);
