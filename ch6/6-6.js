// let defaultOwner = { firstName: "마틴", lastName: "파울러" };

// export function getDefaultOwner() {
//   return defaultOwner;
// }

class Person {
  #lastName;
  #firstName;

  constructor(data) {
    this.#lastName = data.lastName;
    this.#firstName = data.firstName;
  }

  get firstName() {
    return this.#firstName;
  }

  get lastName() {
    return this.#lastName;
  }
}

let defaultOwner = new Person({ firstName: "마틴", lastName: "파울러" });
export function getDefaultOwner() {
  return defaultOwner;
}
