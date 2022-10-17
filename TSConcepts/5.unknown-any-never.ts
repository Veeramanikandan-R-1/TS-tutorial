// unknown vs any
let userInput: unknown;
let userName: string;

userInput = 2;
userInput = "mani";
// using any avoids this restriction
if (typeof userInput === "string") {
  userName = userInput;
}

// this function never returns a value => by default it's of type void
function generateError(errorMessage: string, code: number): never {
  throw { message: errorMessage, errorCode: code };
}

generateError("An error occured", 500);
