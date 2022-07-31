/* 
    매직 리터럴 바꾸기

    그냥 값을 나타내기보다는 상수변수로 관리한다면 코드 해석에 도움이된다.
*/

const STANDRD_GRAVITY = 9.81;
function potentialEnergy(mass, height) {
  // return mass * 9.81 * height;
  return mass * STANDRD_GRAVITY * height;
}
