const expect = require("expect");
const utils = require("./utilities.js");

describe("Utilities", () => {

  describe("#Add", () => {
    it("should add 2 numbers", () => {
      var res = utils.add(33, 11);
      //used the asertion method expect from the npm expect
      expect(res).toBe(44).toBeA("number");
    });
  });

  //added param in callback function to make mocha wait for the test to complete
  //before running. Otherwise the function is skipped since it wouldnt wait the 1000ms time.
  //done() forces app to wait, then test is completed properly
  it("should async add a number", (done) => {
      utils.asyncAdd(4,7, (sum) => {
        expect(sum).toBe(11).toBeA("number");
        done();
      });
  });


  it("should async square a number", (done) => {
    utils.asyncSquare(4, (sum) => {
      expect(sum).toBe(16).toBeA("number");
      done();
    });
  });


  it("should square number", () => {
    var res1 = utils.square(9, 9);
    expect(res1).toBe(81).toBeA("number");
  });
});

it("should expect some values", () => {
  //expect(12).toNotBe(11);
  //use toEqual to compare objects as toBe does not work which compares object equality
  //expect({name: "steven"}).toEqual({name: "steven"});
  expect([2,3,4]).toInclude(3);
  expect([2,3,4]).toExclude(6);

  expect({
    name: "steven",
    age: 29,
    location: "Glasgow"
  }).toInclude({age: 29})

});

it("should set first and last names", () => {
  var user = {
    age: 29,
    location: "Glasgow"
  };

  var answer = utils.setName(user, "Steven Barry");
  expect(answer).toEqual(user);
  expect(answer).toInclude({
    firstName: "Steven",
    lastName: "Barry",
    age: 29,
    location: "Glasgow"
  }).toBeA("object");
});
