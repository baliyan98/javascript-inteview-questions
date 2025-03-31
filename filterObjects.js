// Input:
const arr = [
  { name: "Amir", id: "1" },
  { name: "Samlan", id: "2" },
  { name: "Shahrukh", id: "0" },
];

function filterObject(objArray, value) {
  if (typeof value == "number") {
    return objArray[value];
  }

  return objArray.find((obj) => {
    return Object.entries(obj).some(([key, val]) => val === value) || null;
  });
}

console.log(filterObject(arr, 0)); // { name: "Amir", id: "1" }
console.log(filterObject(arr, "Amir")); // { name: "Amir", id: "1" }
console.log(filterObject(arr, "0")); // { name: "Shahrukh", id: "0" }
