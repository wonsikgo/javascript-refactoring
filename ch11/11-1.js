/* 
    API 리팩토링

      - API: 외부에서 사용할수 있도록 노출한 함수들의 집합

      - 좋은 모듈/클래스는 내부 구현사항은 캡슐화 되어 있어야함

      - 외부에서 사요할 핋요가 잇는 동작들만 API로 제공

      - 하나의 일만 하도록, 그 목적이 잘 드러나는 이름으로 짓기

      - 단순 조회와 수정하는 동작으로 명확하게 분리

      - 헷갈리는 방식 지양 (복잡한 매개변수들)


    - 질의 함수와 변경 함수 분리하기

*/

// 예제 1
// 하나의 일만 하도록 리팩토링
// function totalOutstandingAndSendBill() {
//   const result = customer.invoices.reduce(
//     (total, each) => each.amount + total,
//     0
//   );
//   sendBill();
//   return result;
// }

function getTotalOutstanding() {
  return customer.invoices.reduce((total, each) => each.amount + total, 0);
}

function sendBill() {
  // bill을 보냄
}

// 예제 2
export function alertForMiscreant(people, alarm) {
  // for (const p of people) {
  //   if (p === "Don") {
  //     setOffAlarms(alarm, p);
  //     return "Don";
  //   }
  //   if (p === "John") {
  //     setOffAlarms(alarm, p);
  //     return "John";
  //   }
  // }
  // return "";

  const miscreant = findMiscreant(people);
  setOffAlarms(alarm, miscreant);
}

function findMiscreant(people) {
  for (const p of people) {
    if (p === "Don") {
      return "Don";
    }
    if (p === "John") {
      return "John";
    }
  }
}

function setOffAlarms(alarm, p) {
  alarm.setOff("Found Miscreant " + p);
}
