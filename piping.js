// Input:
const val = { salary: 10000 };

const getSalary = (person) => person.salary;
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - grossSalary * 0.3;

function pipe(...fns) {
  // recieve all functions as arguments
  return function (val) {
    for (let fn of fns) {
      val = fn(val);
    }
    return val;
  };
}

const result = pipe(getSalary, addBonus, deductTax)(val);
console.log(result);

// Output:
// 7700
