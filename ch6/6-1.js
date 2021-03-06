// 리팩토링 전

// export function printOwing(invoice) {
//   let outstanding = 0;

//   console.log('***********************');
//   console.log('**** Customer Owes ****');
//   console.log('***********************');

//   // calculate outstanding
//   for (const o of invoice.orders) {
//     outstanding += o.amount;
//   }

//   // record due date
//   const today = new Date();
//   invoice.dueDate = new Date(
//     today.getFullYear(),
//     today.getMonth(),
//     today.getDate() + 30
//   );

//   //print details
//   console.log(`name: ${invoice.customer}`);
//   console.log(`amount: ${outstanding}`);
//   console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
// }

// 리팩토링 후
export function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutStanding(invoice);
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

function printBanner() {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
}

function calculateOutStanding(invoice) {
  // let result = 0;

  // for (const o of invoice.orders) {
  //   result += o.amount;
  // }
  // return result;
  return invoice.orders.reduce((sum, order) => (sum += order.amout), 0);
}

function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function printDetails(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: "엘리",
};
printOwing(invoice);
