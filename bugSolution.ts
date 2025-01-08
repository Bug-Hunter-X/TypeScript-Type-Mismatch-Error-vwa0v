function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane Doe", 30];

// Solution 1: Type Assertion
console.log(greeter(user[0] as string));

// Solution 2: Array Destructuring
let [name] = user;
console.log(greeter(name));

//Solution 3:  Overload the greeter function to accept an array
function greeter(person: string): string;
function greeter(person: string[]): string;
function greeter(person: string | string[]): string {
  if(typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person[0];
  }
}
console.log(greeter(user));
console.log(greeter("John Doe"));