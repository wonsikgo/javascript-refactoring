/* 
    객체 통째로 넘기기
*/

export function temperatureAlerts(room, plan) {
  const alerts = [];
  // const low = room.daysTempRange.low;
  // const high = room.daysTempRange.high;
  // if (!plan.withinRange(low, high)) {
  //   alerts.push("room temperature went outside range");
  // }

  if (!plan.withinRange(room.daysTempRange)) {
    alerts.push("room temperature went outside range");
  }

  return alerts;
}

export class HeatingPlan {
  constructor(temperatureRange) {
    this._temperatureRange = temperatureRange;
  }

  // withinRange(bottom, top) {
  //   return (
  //     bottom >= this._temperatureRange.low && top <= this._temperatureRange.high
  //   );
  // }

  withinRange(range) {
    return (
      range.bottom >= this._temperatureRange.low &&
      range.top <= this._temperatureRange.high
    );
  }
}
