export class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  isHighPriority() {
    return this.priority.higherThan("nomal");
  }
}

class Priorty {
  #value;
  constructor(value) {
    if (Priorty.legalValues().includes(value)) {
      this.#value = value;
    } else {
      throw new Error(`${value} is invalid for Priority`); // 생성자에서 에러를 틩겨내는건 보안에 취약할 수 있다.
    }
  }

  get index() {
    return Priorty.legalValues().indexOf(this.#value);
  }

  equals(other) {
    return this.#index === other.#index;
  }

  higherThan(other) {
    return this.#index > other.#index;
  }

  static legalValues() {
    return ["low", "nomal", "high", "rush"];
  }
}

const orders = [
  new Order({ priority: "normal" }),
  new Order({ priority: "high" }),
  new Order({ priority: "rush" }),
];

// const highPriorityCount = orders.filter(
//   (o) => 'high' === o.priority || 'rush' === o.priority
// ).length;

const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;
