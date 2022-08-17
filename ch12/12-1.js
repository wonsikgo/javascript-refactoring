/* 
    상속 다루기

      코드의 재상요을 위해 상속을 사용

        - 상속보다는 컴포지션이 더 좋을 수 있다.

      상속의 문제점

        - 딱하나만 상속이 가능함

        - 불필요한 기능이 상속됨

        - 족보가 꼬일 수 있음

        - 수정이 어려울수 있다.
*/

// 예시 1
class Employee {
  get name() {}
}

class Salesperson extends Employee {
  // get name() {}
}

class Engineer extends Employee {
  // get name() {}
}

// 예시 2
class Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Department extends Party {
  // get totalAnnualCost() {
  //   return this.monthlyCost * 12;
  // }
}
class Employee extends Party {
  // get annualCost() {
  //   return this.monthlyCost * 12;
  // }
}
