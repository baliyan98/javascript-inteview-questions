class ComputeAmount {
  constructor() {
    this.value = 0;
  }
  crore(amount) {
    this.value = this.value + amount * 10000000;
    return this;
  }
  lac(amount) {
    this.value = this.value + amount * 100000;
    return this;
  }
  thousands(amount) {
    this.value = this.value + amount * 1000;
    return this;
  }
  hundred(amount) {
    this.value = this.value + amount * 100;
    return this;
  }
  total() {
    return this.value;
  }
}

const computeAmount = new ComputeAmount();

//console.log(computeAmount.crore(1).lac(15).thousands(21).total());

const obj = {
  helloWorld: function () {
    return "hello " + this.name;
  },
  name: "Vishal",
};

const obj2 = {
  helloWorld: obj.helloWorld,
  name: "Rahul",
};

console.log(obj2.helloWorld.call(obj));
