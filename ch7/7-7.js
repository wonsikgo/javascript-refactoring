// class Person {
//   #name;
//   #department;
//   constructor(name, department) {
//     this.#name = name;
//     this.#department = department;
//   }

//   get name() {
//     return this.#name;
//   }

//   get department() {
//     return this.#department;
//   }

//   set department(arg) {
//     this.#department = arg;
//   }
// }

// export class Department {
//   #manager;
//   #chargeCode;
//   constructor(manager, chargeCode) {
//     this.#manager = manager;
//     this.#chargeCode = chargeCode;
//   }

//   get chargeCode() {
//     return this.#chargeCode;
//   }

//   set chargeCode(arg) {
//     this.#chargeCode = arg;
//   }

//   get manager() {
//     return this.#manager;
//   }

//   set manager(arg) {
//     this.#manager = arg;
//   }
// }

// const person = new Person('Tom', new Department('aManager', '999'));
// console.log(person.name);
// console.log(person.department.manager);
// console.log(person.department.chargeCode);

class Person {
  #name;
  #department;
  constructor(name, manager, chargeCode) {
    this.#name = name;
    this.#department = new Department(manager, chargeCode);
  }

  get name() {
    return this.#name;
  }

  get chargeCode() {
    return this.#department.chargeCode;
  }

  get manager() {
    return this.#department.manager;
  }
}

export class Department {
  #manager;
  #chargeCode;
  constructor(manager, chargeCode) {
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get chargeCode() {
    return this.#chargeCode;
  }

  set chargeCode(arg) {
    this.#chargeCode = arg;
  }

  get manager() {
    return this.#manager;
  }

  set manager(arg) {
    this.#manager = arg;
  }
}

const person = new Person("Tom", "aManager", "999");
console.log(person.name);
console.log(person.manager);
console.log(person.chargeCode);
