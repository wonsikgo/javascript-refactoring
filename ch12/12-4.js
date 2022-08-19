/* 
    메서드 내리기

      - 모든 메서드를 상속받지 않도록 한다.

      - 메서드가 필요한 해당 서브클래스에서만 정의 하도록 한다.
*/
class Employee {
  // get quota() {}
}

class Engineer extends Employee {}
class Salesperson extends Employee {
  get quota() {}
}
