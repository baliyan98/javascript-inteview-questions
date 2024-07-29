const input = {
  A: (a, b, c) => a + b + c,
  B: (a, b, c) => a - b - c,
  C: (a, b, c) => a + b * c,
  D: {
    E: (a, b, c) => a + b + c,
  },
};

function compute(...args) {
  function process(obj) {
    let result = {};
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "function") {
        result[key] = value(...args);
      } else if (typeof value === "object") {
        result[key] = process(value);
      } else {
        result[key] = value;
      }
    }
    return result;
  }

  return process(input);
}

console.log(compute(1, 1, 1));

// A: 3, B : -1, C : 2 , D : {E : 3}
