import fs from "fs";

// if (!process.argv[2]) {
//   throw new Error('파일 이름을 입력하세요');
// }

// const fileName = `./${process.argv[2]}.json`;
// if (!fs.existsSync(fileName)) {
//   throw new Error('파일이 존재하지 않습니다');
// }

// const rawData = fs.readFileSync(fileName);
// const orders = JSON.parse(rawData);
// if (process.argv.includes('-r')) {
//   console.log(orders.filter((order) => order.status === 'ready').length);
// } else {
//   console.log(orders.length);
// }

run(process.argv);

function run(args) {
  const command = parseCommand(args);
  countOrders(command);
}

function parseCommand(args) {
  if (!args[2]) {
    throw new Error("파일 이름을 입력하세요");
  }

  const fileName = `./${args[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error("파일이 존재하지 않습니다");
  }

  const contReadyOnly = args.includes("-r");
  return {
    fileName,
    contReadyOnly,
  };
}

function countOrders({ fileName, contReadyOnly }) {
  const rawData = fs.readFileSync(fileName);
  const orders = JSON.parse(rawData);
  const filtered = contReadyOnly
    ? orders.filter((order) => order.status === "ready")
    : orders;

  console.log(filtered.length);
}
