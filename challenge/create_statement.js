export function createStatement(invoice, plays) {
  const statement = {};
  statement.customer = invoice.customer;
  statement.performances = invoice.performances.map(enrichPerformance);
  statement.totalAmount = totalAmount(statement.performances);
  statement.totalCredtis = totalCredtis(statement.performances);

  return statement;

  function enrichPerformance(performance) {
    const result = { ...performance };
    result.play = playFor(performance);
    result.amount = amountFor(result);
    result.credits = volumeCreditsFor(result);
    return result;
  }

  function playFor(performance) {
    return plays[performance.playID];
  }

  function amountFor(performance) {
    let result = 0;
    switch (performance.play.type) {
      case "tragedy": // 비극
        result = 40000;
        if (performance.audience > 30) {
          result += 1000 * (performance.audience - 30);
        }
        break;
      case "comedy": // 희극
        result = 30000;
        if (performance.audience > 20) {
          result += 10000 + 500 * (performance.audience - 20);
        }
        result += 300 * performance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${performance.play.type}`);
    }

    return result;
  }

  function volumeCreditsFor(performance) {
    let result = 0;
    result += Math.max(performance.audience - 30, 0);

    if ("comedy" === performance.play.type) {
      result += Math.floor(performance.audience / 5);
    }

    return result;
  }

  function totalCredtis(performances) {
    return performances.reduce((sum, p) => (sum += p.credits), 0);
  }

  function totalAmount(performances) {
    return performances.reduce((sum, p) => (sum += p.amount), 0);
  }
}
