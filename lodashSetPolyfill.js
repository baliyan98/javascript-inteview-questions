const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};
// obj.a.b.c[2] = 8;
// console.log(obj.a.b.c);

function set(obj, path, value) {
  if (path === "" || path.length == 0) {
    return undefined;
  }
  if (typeof path === "string") {
    obj[path] = value;
    return obj;
  }
  //   if (Array.isArray(path)) {
  //     path = path.join(".");
  //   }

  //   const pathArray = [];
  //   for (const element of path) {
  //     if (element !== "[" && element !== "]" && element !== ".") {
  //       pathArray.push(element);
  //     }
  //   }

  //   const value = pathArray.reduce((source, currPath) => source[currPath], obj);

  //   return value ? value : undefined;
}
obj["a.b.c[2]"] = 4;

//set(obj, "a.b.c[2]", 6);
console.log(obj.a.b.c[2]);
