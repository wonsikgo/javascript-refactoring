/* 
  클래스 하나당 하나의 역활, 책임, 도메인을 가지것이 좋다.
*/
// class Person {
//   #name;
//   #officeAreaCode;
//   #officeNumber;
//   constructor(name, areaCode, number) {
//     this.#name = name;
//     this.#officeAreaCode = areaCode;
//     this.#officeNumber = number;
//   }

//   get name() {
//     return this.#name;
//   }

//   set name(arg) {
//     this.#name = arg;
//   }

//   get telephoneNumber() {
//     return `(${this.officeAreaCode}) ${this.officeNumber}`;
//   }

//   get officeAreaCode() {
//     return this.#officeAreaCode;
//   }

//   set officeAreaCode(arg) {
//     this.#officeAreaCode = arg;
//   }

//   get officeNumber() {
//     return this.#officeNumber;
//   }

//   set officeNumber(arg) {
//     this.#officeNumber = arg;
//   }
// }

class Person {
  #name;
  #telephoneNumber;
  constructor(name, areaCode, number) {
    this.#name = name;
    this.#telephoneNumber = new TelephoneNumber(areaCode, number);
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get telephoneNumber() {
    return this.#telephoneNumber.toString;
  }

  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }

  get officeNumber() {
    return this.#telephoneNumber.number;
  }
}

class TelephoneNumber {
  #areaCode;
  #number;
  constructor(area, number) {
    this.#areaCode = area;
    this.#number = number;
  }

  get areaCode() {
    return this.#areaCode;
  }

  set areaCode(arg) {
    this.#areaCode = arg;
  }

  get number() {
    return this.#number;
  }

  set number(arg) {
    this.#number = arg;
  }

  get toString() {
    return `(${this.#areaCode}) ${this.#number}`;
  }
}

const person = new Person("엘리", "010", "12345678");
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
