/* 
    조건식 통합하기
*/

function disabilityAmount(employee) {
  // if (employee.seniority < 2) return 0;
  // if (employee.monthsDisabled > 12) return 0;
  // if (employee.isPartTime) return 0;

  if (isNotEligibleForDisability(employee)) return 0;
  return 1;
}

function isNotEligibleForDisability(employee) {
  return (
    employee.seniority < 2 ||
    employee.monthsDisabled > 12 ||
    employee.isPartTime
  );
}
