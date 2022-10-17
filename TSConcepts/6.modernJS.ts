const button = document.querySelector("button")!; //exclamation mark is to explicitly mention button existance

button.addEventListener("click", () => {
  console.log("clicked");
});

// spread operator
const array1: number[] = [1, 2, 3, 4];
const arr2 = [...array1];
console.log(arr2);

// rest operator
const addFunction = (...numbers: number[]) => {
  return numbers.reduce((total, currValue) => {
    return total + currValue;
  }, 0);
};

const addedValue = addFunction(5, 2, 10);
console.log(addedValue);

// object destructuring

const person = {
  firstName: "mani",
  age: 21,
};

// using aliases
const { firstName: username, age } = person;

console.log(username, age);
