const lib = require("../lib");

// first we list all the behaviors(all exicution paths) with inputs
// then for each we creat tests

// Testing calculations
describe("absolute", () => {
  it("should return a positive number if input is positive", () => {
    // it should return a positive number if input is positive
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return a positive number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return a 0 if input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});
// NOTE: when testing decimals make sure to use closeTo matcher (see jest docs)

//Testing Strings
describe("greet", () => {
  it("should return greeting message", () => {
    const result = lib.greet("Mosh");
    expect(result).toMatch(/Mosh/);
  });
});
// NOTE: when testing string write test only to test required text part. dont check whole string

// Testing Arrays
describe("getCurrencies", () => {
  it("should return supported currencies", () => {
    const result = lib.getCurrencies();
    expect(result).toEqual(expect.arrayContaining(["USD", "EUR", "AUD"]));
    // check if result contains on of ["USD", "EUR", "AUD"] values
    // more: jest docs > API > API Reference > expect
  });
});

// Testing objects
describe("getProduct", () => {
  it("should return the product with given id", () => {
    const result = lib.getProduct(1);
    expect(result).toEqual({ id: 1, price: 10 }); // match exact object
    expect(result).toMatchObject({ id: 1, price: 10 }); // pass if given props and values in object equal(even if more other props are there)
    expect(result).toHaveProperty('id', 1) // pass if given prop and value equal(even more other props in object)
  });
});

describe("registerUser", () => {
  it("should throw if username is falsy", () => {
    // should test on follwing test cases
    const args = [null, undefined, NaN, "", 0, false]
    // here as we test exception we cant pass value to expect Func. insted we should  pass function
    args.forEach(a => {
      expect(()=> lib.registerUser(a) ).toThrow();
    })
  });

  it("should return user object if valid  username is passed", () => {
    // happy path
    const result = lib.registerUser("testusername");
    expect(result).toMatchObject({ username: "testusername" })
    expect(result.id).toBeGreaterThan(0);
  });
});

// IMPO NOTE: on package.json --watchAll tag will trigger test automatically
// "scripts": {
//   "test": "jest --watchAll"
// },