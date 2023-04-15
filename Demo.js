const index = require("./index.js");
console.log("pavan");
console.log("check success");
console.log(index);
console.log(index.var1);
console.log(index.var2);
console.log(index.funct());

let arr = [1, 2, 3, 4, 5, 6, 7, 7, 6, 5, 4, 4, 4, 8, 9, 0];
console.log(arr);
arr.filter((item) => {
  // console.log(item);

  if (item === 4) {
    console.log(item);
  }
});
