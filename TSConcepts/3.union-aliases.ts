// alias type
type Combinable = number | string;
type ConversionDescriptor = "as-text" | "as-number";

// using union
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor //literal types
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  // if (resultConversion === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
  return result;
}

const combinedAges = combine(1, 2, "as-number");
console.log(combinedAges);

const combineStringAges = combine("3", "4", "as-number");
console.log(combineStringAges);

const combinedNames = combine("a", "b", "as-text");
console.log(combinedNames);
