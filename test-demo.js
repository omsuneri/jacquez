// Test file to demonstrate Jacquez Action working
// This file intentionally has some issues for testing

export function testFunction() {
  // TODO: This function needs proper documentation
  console.log("Hello world");
  return "test";
}

// Missing JSDoc comments and proper naming
export const SOME_CONSTANT = "test";

// This should trigger contributing guidelines violations
function poorlyNamedFunc() {
  var oldSyntax = "using var instead of const/let";
  return oldSyntax;
}

// Another function without proper documentation
function anotherFunction(param1, param2) {
  return param1 + param2;
}

// Adding more test content to demonstrate the action
class TestClass {
  constructor() {
    this.value = "test";
  }
  
  // Method without JSDoc
  getValue() {
    return this.value;
  }
}
