const states = ["MA", "FA", "LA"];
// let appliesToMass = false;
// for (const s of states) {
//   if (s === 'MA') appliesToMass = true;
// }

let appliesToMass = states.includes("MA");
console.log(`appliesToMass : ${appliesToMass}`);
