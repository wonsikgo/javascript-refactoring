// export function inNewEngland(aCustomer) {
//   return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
// }

// 함수 안에서 필요로 하는것만 받는다.
export function inNewEngland(state) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(state);
}
