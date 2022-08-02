/* 
    조건문 분해하기
*/

function calculateCharge(date, quantity, plan) {
  let charge = 0;
  // if (!date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd))
  //   charge = quantity * plan.summerRate;
  // else charge = quantity * plan.regularRate + plan.regularServiceCharge;

  /* 첫번째 리팩토링 */
  // if (isSummer()) {
  //   charge = summerCharge();
  // } else {
  //   charge = regularCharge();
  // }
  //   return charge;

  /* 두번째 리팩토링 */
  return isSummer() ? summerCharge() : regularCharge();

  function isSummer() {
    return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
  }

  function summerCharge() {
    return quantity * plan.summerRate;
  }

  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }
}
