// export function readingsOutsideRange(station, min, max) {
//   return station.readings.filter((r) => r.temp < min || r.temp > max);
// }

// 매개변수는 4개 이상이 되지 않는것이 좋다.
export function readingsOutsideRange(station, ragne) {
  // return station.readings.filter(
  //   (r) => r.temp < ragne.min || r.temp > ragne.max
  // );
  return station.readings.filter((r) => ragne.contains(r.temp));
}

export class NumberRange {
  #min;
  #max;
  constructor(min, max) {
    this.#min = min;
    this.#max = max;
  }

  get min() {
    return this.#min;
  }

  get max() {
    return this.#max;
  }

  contains(number) {
    return number >= this.#min && number <= this.#max;
  }
}

const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};

// const operationPlan = {
//   temperatureFloor: 51,
//   temperatureCeiling: 53,
// };

const operationPlan = new NumberRange(51, 53);

const result = readingsOutsideRange(station, operationPlan);

console.log(result);
