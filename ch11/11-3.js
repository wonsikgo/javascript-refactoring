/* 
    플래그 인수 제거하기
*/

// 예제 1
// function setDimension(name, value) {
//   if (name === 'height') {
//     this._height = value;
//     return;
//   }
//   if (name === 'width') {
//     this._width = value;
//     return;
//   }
// }
function setWidth(value) {
  this._width = value;
}
function setHeight(value) {
  this._height = value;
}

// 예제 2
class Concert {
  // book(customer, isPremium) {}

  // 중복되는 로직이 많다면 내부에서만 사용가능한 private book 함수를 생성
  regularBook(customer) { }
  
  premiumBook(customer) { }
  
  // 
  #book(customer, isPremium) {}
}

// 예제 3
// function setSwitch(on);
function switchOn();
function switchOff();
