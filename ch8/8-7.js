/*
    반복문 쪼개기
*/
export function reportYoungestAgeAndTotalSalary(people) {
  // let youngest = people[0] ? people[0].age : Infinity;
  // let totalSalary = 0;
  // for (const p of people) {
  //   if (p.age < youngest) youngest = p.age;
  //   totalSalary += p.salary;
  // }

  // for문을 두번 돌린다고 성능이 많이 안좋아지는건 아니다. 단 시간복잡도 제곱은 주의
  // 성능이 걱정되면 개발후 측정하고 리팩토링
  return `youngestAge: ${youngstAge()}, totalSalary: ${totalSalary()}`;
  function youngstAge() {
    return Math.min(...people.map((p) => p.age));
  }

  function totalSalary() {
    return people.reduce((total, p) => (total += p.salary)), 0;
  }
}
