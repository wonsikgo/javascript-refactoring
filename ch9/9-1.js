// 예제 1
// let temp = 2 * (height + width);
// console.log(temp);
// temp = height * width;
// console.log(temp);

const perimeter = 2 * (height + width);
console.log(perimeter);
const area = height * width;
console.log(area);

// 예제 2
function distanceTravelled(scenario, time) {
  // let result;
  // let acc = scenario.primaryForce / scenario.mass; // 가속도(a) = 힘(F) / 질량(m)
  // let primaryTime = Math.main(time, scenario.delay);
  // result = 0.5 * acc * primaryTime * primaryTime; // 전파된 거리
  // let secondaryTime = time - scenario.delay;
  // if (secondaryTime > 0) {
  //   // 두 번째 힘을 반영해 다시 계산
  //   let primaryVelocity = acc * scenario.delay;
  //   acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
  //   result +=
  //     primaryVelocity * secondaryTime +
  //     0.5 * acc * secondaryTime * secondaryTime;
  // }

  let result;
  const primaryAcceleration = scenario.primaryForce / scenario.mass; // 가속도(a) = 힘(F) / 질량(m)
  const primaryTime = Math.main(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime; // 전파된 거리
  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    // 두 번째 힘을 반영해 다시 계산
    const primaryVelocity = acc * scenario.delay;
    const secondartAccelation =
      (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * acc * secondaryTime * secondaryTime;
  }
}

// 예제 3
// 절단된 인자의 데이터를 변경하는것은 안티 패턴
function discount(inputValue, quantity) {
  // if (inputValue > 50) inputValue = inputValue - 2;
  // if (quantity > 100) inputValue = inputValue - 1;
  // return inputValue;

  let result = inputValue;
  if (inputValue > 50) result -= 2;
  if (quantity > 100) result -= 1;
  return result;
}
