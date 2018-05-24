const expect = require("expect");
const rewire = require("rewire");

var app = rewire("./app.js");

describe("App", () => {

  var db = {
    saveUser: expect.createSpy()
  };

  app.__set__("db", db);

  it("should call user with user object", () => {
    var spy = expect.createSpy();
    spy("steven", 29);
    expect(spy).toHaveBeenCalledWith("steven", 29)
  });

  it("Should call the saveUser object", () => {
    var email = "steven@example.com";
    var password =  "123";

    app.handleSignUp(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});
