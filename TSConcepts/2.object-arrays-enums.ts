// typing object
const obj1: { name: string; age: number } = {
  name: "mani",
  age: 24,
};

// typing array
let favouritesSports: string[];
favouritesSports = ["cricket", "chess"];

console.log(obj1.age);

for (const sport of favouritesSports) {
  console.log(sport.toUpperCase());

  // console.log(sport.map())  Will throw error since sport is not an array
}

// typing tuples
let arr1: [number, string] = [1, "abc"];
// arr1 = [1, "abc", 2]; will not allow
arr1.push("def"); //allowed push has excemption
console.log(arr1);

// enums

// before using enum
const ADMIN = 0;
const person1 = {
  role: ADMIN,
};
if (person1.role === ADMIN) {
  console.log("is admin");
}

// After using enum
enum Role {
  READ_ONLY,
  ADMIN,
}
// enum Role {
//   READ_ONLY:10,
//   ADMIN,
// } assigning numbers

// enum Role {
//   READ_ONLY:'value',
//   ADMIN:'value1',
// } assigning string

if (person1.role === Role.READ_ONLY) {
  console.log("is read only user");
}

// any
let favouritesSportsAny: any[];
favouritesSportsAny = ["cricket", 3];
