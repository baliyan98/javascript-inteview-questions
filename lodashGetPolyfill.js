const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

//console.log(obj.a.b.c);

function get(obj, path) {
  if (path === "" || path.length == 0) {
    return undefined;
  }

  if (Array.isArray(path)) {
    path = path.join(".");
  }

  const pathArray = [];
  for (const element of path) {
    if (element !== "[" && element !== "]" && element !== ".") {
      pathArray.push(element);
    }
  }

  const value = pathArray.reduce((source, currPath) => source[currPath], obj);

  return value ? value : undefined;
}

console.log(get(obj, "a"));
console.log(get(obj, "a"));
console.log(get(obj, "a.b.c"));
console.log(get(obj, "a.b.c[0]"));
