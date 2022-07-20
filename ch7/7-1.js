// const organization = { name: 'Acme Gooseberries', country: 'GB' };

class Organization {
  #name;
  #country;
  constructor(data) {
    this.#data = data;
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get country() {
    return this.#country;
  }

  set country(value) {
    this.#country = value;
  }

  get rawData() {
    // return { name: this.name, country: this.country };
    return { ...this.#data }; // 얕은복사, 깊은 복사를 하기위해서는 cloneDeep
  }
}

const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB",
});

organization.name = "Dream Coding";
console.log(organization.name);
console.log(organization.country);
