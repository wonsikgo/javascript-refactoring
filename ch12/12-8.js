/* 
    슈퍼 클래스 추출하기
*/

class Party {
  get name() {}
  get annualCost() {}
}

class Department extends Party {
  get headCount() {}
}

class Employee extends Party {
  get id() {}
}
