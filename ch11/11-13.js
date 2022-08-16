/* 
    예외 사전확인으로 바꾸기
*/

const values = [];
function getValueForPeriod(periodNumber) {
  /* 2차 리팩토링 */
  return valeus[periodNumber] ?? 0;

  /* 1차 리팩토링 */
  // if (periodNumber < 0 || periodNumber >= values.length) {
  //   return 0;
  // }

  // return values[periodNumber];
  // const value = values[periodNumber];
  // if (!value) {
  //   throw new Error("value is undefined");
  // }
  // return value;
}

try {
  getValueForPeriod(-10);
} catch (error) {
  console.log("에러 발생!");
}
