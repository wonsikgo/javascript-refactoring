/* 
    슈퍼클래스를 위임으로 바꾸기

        - 모든 함수를 노출하기 때문에 composition으로 처리하는것이 효율적
*/
class List {}

// class Stack extends List {}
class Stack {
  constructor() {
    this.storage = new List();
  }

  pop() {
    // 내부에서 리스트의 내장함수사용
    return this.storage.pop();
  }
  push() {}
}
