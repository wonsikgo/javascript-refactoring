/* 
    생성자를 팩터리 함수로 바꾸기
*/

export class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: "Engineer", M: "Manager", S: "Salesman" };
  }

  static createEnginner(name) {
    return new Employee(name, "E");
  }

  static createSeniorEnginner(name) {
    return new Employee(name, "SE");
  }

  static createMarkter(name) {
    return new Employee(name, "M");
  }
}

const employee = Employee.createEnginner("엘리");
