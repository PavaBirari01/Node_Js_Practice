const ImportExport = require("./ImportExport.js");
console.log("pavan");
console.log("check success");
console.log(ImportExport);
console.log(ImportExport.var1);
console.log(ImportExport.var2);
console.log(ImportExport.funct());

let arr = [1, 2, 3, 4, 5, 6, 7, 7, 6, 5, 4, 4, 4, 8, 9, 0];
console.log(arr);
arr.filter((item) => {
  // console.log(item);

  if (item === 4) {
    console.log(item);
  }
});
