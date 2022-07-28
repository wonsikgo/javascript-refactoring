// 예제 1
// 사용하는 변수를 가까이 두는게 코드 이해에 더 도움된다.
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retreiveOrder();
let charge;
// const chargePerUnit = pricingPlan.unit;

// 예제 2
function someFunc() {
  // let result;
  // if (availableResources.length === 0) {
  //   result = createResource();
  //   allocatedResources.push(result);
  // } else {
  //   result = availableResources.pop();
  //   allocatedResources.push(result);
  // }
  const result =
    availableResources.length === 0
      ? createResource()
      : availableResources.pop();
  allocatedResources.push(result);
  return result;
}
