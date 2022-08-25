/* 
    최종 챌린지

    - 코드 이해

    - 단계별로 분리 (함수 단위)

    - 객체지향
*/
export function statement(invoice, plays) {
  return renderPlainText(invoice, plays);
}

function renderPlainText(invoice, plays) {
  let result = `청구 내역 (고객명: ${invoice.customer})\n`;

  for (let perf of invoice.performances) {
    result += `  ${playFor(perf).name}: ${usd(calcAmount(perf) / 100)} (${
      perf.audience
    }석)\n`;
  }
  result += `총액: ${usd(totalAmount() / 100)}\n`;
  result += `적립 포인트: ${totalCredtis()}점\n`;
  return result;

  function playFor(performance) {
    return plays[performance.playID];
  }

  function volumeCreditsFor(performance) {
    let result = 0;
    result += Math.max(performance.audience - 30, 0);

    if ("comedy" === playFor(performance).type) {
      result += Math.floor(performance.audience / 5);
    }

    return result;
  }

  function calcAmount(performance) {
    let result = 0;
    switch (playFor(performance).type) {
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
        throw new Error(`알 수 없는 장르: ${playFor(performance).type}`);
    }

    return result;
  }

  function totalCredtis() {
    return invoice.performances.reduce(
      (sum, p) => (sum += volumeCreditsFor(p)),
      0
    );
  }

  function totalAmount() {
    return invoice.performances.reduce((sum, p) => (sum += calcAmount(p)), 0);
  }
}

function usd(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(number);
}

// 사용예:
const playsJSON = {
  hamlet: { name: "Hamlet", type: "tragedy" },
  "as-like": { name: "As You Like It", type: "comedy" },
  othello: { name: "Othello", type: "tragedy" },
};

const invoicesJSON = [
  {
    customer: "BigCo",
    performances: [
      {
        playID: "hamlet",
        audience: 55,
      },
      {
        playID: "as-like",
        audience: 35,
      },
      {
        playID: "othello",
        audience: 40,
      },
    ],
  },
];

const result = statement(invoicesJSON[0], playsJSON);
const expected =
  "청구 내역 (고객명: BigCo)\n" +
  "  Hamlet: $650.00 (55석)\n" +
  "  As You Like It: $580.00 (35석)\n" +
  "  Othello: $500.00 (40석)\n" +
  "총액: $1,730.00\n" +
  "적립 포인트: 47점\n";
console.log(result);
console.log(result === expected);
