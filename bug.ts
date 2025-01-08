function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane Doe", 30];
console.log(greeter(user)); // This will cause a compilation error because user is not a string