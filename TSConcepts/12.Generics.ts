const names: Array<string> = []; //same as string[]
// names[0].split(" ");

// by using generic we tell ts what promise will return
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

// promise.then((data) => console.log(data.split(" ")));

// Generic functions

// constraint can be added to generic functino using extends
function merge<A extends object, B extends object>(objA: A, objB: B) {
  return Object.assign(objA, objB);
}

const mergedObject = merge<{ name: string }, { age: number }>(
  { name: "mani" },
  { age: 21 }
);
// without generic we cann't access name or age since ts could n't find on its own
console.log(mergedObject.name);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got one element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there"));

// Generic type example 2
// U should be a type of keyof T
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "value is " + obj[key];
}

extractAndConvert({ name: "mani" }, "name");

// Generic in classes

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());

// object won't work because it's not primitive type
// const objStorage = new DataStorage<object>();
// const maxObj = { name: "max" };
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: "mani" });
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal; // to convert partial to courseGoal
}

const names1: Readonly<string[]> = ["max"];
// names1.push("s"); // read only doesn't allow
