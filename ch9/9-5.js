/* 
    값을 참조로 바꾸기

    값이 변경될때 그 값을 참조하는 모든곳이 변경되야 한다면 값보다는 참조로 사용해야 한다.

    CustomerRepository를 생성해서 고객의 데이터를 관리하는 객체를 만들고 
    
    모든 주문은 CustomerRepository를 참조하기 때문에 데이터를 효율적으로 관리할 수 있다.
*/
const customerRepository = new CustomerRepository();

const oder = new Order(
  data.number,
  customerRepository.registerCustomer(data.custoerId)
);

class Order {
  constructor(number, customer) {
    this._number = number;
    this._customer = customer;
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }
}

class CustomerRepository {
  #customers;

  constructor() {
    this.#customers = new Map();
  }

  registerCustomer(id) {
    if (!this.#customers.has(id)) {
      this.#customers.set(id, new Customer(id));
    }
    return findCustomer(id);
  }

  findCustomer(id) {
    return this.#customers.get(id);
  }
}
