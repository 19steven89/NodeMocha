const utils = require("./utilities.js")

it("should add 2 numbers", () => {
  var res = utils.add(33, 11);

  if(res !== 44){
    throw new Error(`Expected 44, but got ${res}`);
  }
});

it("should square number", () => {
  var res1 = utils.square(9, 9);

  if(res1 !== 81){
    throw new Error(`Expected 81, but got ${res1}`)
  }
});
