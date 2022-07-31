/* 
    참조를 값으로 바꾸기

    참조값은 가변성이기 때문에 참조하는 곳에서 변경될 수 있기 때문에 불변성을 유지하도록 변경

    TelephoneNumber set을 제거해서 TelephoneNumber을 변경할수 없도록한다.

    값을 변경하기 위해서는 TelephoneNumber을 다시 생성

    메모리가 낭비될수 있지만 크지 않고 안정성을 올린다는 장점이 더 클수있다.
*/

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

  set officeAreaCode(value) {
    // this.#telephoneNumber.areaCode = value;
    this.#telephoneNumber.areaCode = new TelephoneNumber(
      value,
      this.officeNumber
    );
  }

  get officeNumber() {
    return this.#telephoneNumber.number;
  }

  set officeNumber(value) {
    // this.#telephoneNumber.number = value;
    this.#telephoneNumber.number = new TelephoneNumber(
      this.officeAreaCode,
      number
    );
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
  // set areaCode(arg) {
  //   this.#areaCode = arg;
  // }

  get number() {
    return this.#number;
  }
  // set number(arg) {
  //   this.#number = arg;
  // }

  get toString() {
    return `(${this.#areaCode}) ${this.#number}`;
  }
}

const person = new Person("엘리", "010", "12345678");
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
