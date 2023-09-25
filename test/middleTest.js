const assert = require('chai').assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns [3, 4] for ['q', 2, 3, 4, 5, 4]", () => {
    assert.deepEqual(middle(['q', 2, 3, 4, 5, 4]), [3, 4]);
  });
  it("returns  [Lighthouse, Labs] for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
  });
  it("returns  [3,5] for ['r', 2, 3, 5, 5, 9]", () => {
    assert.deepEqual(middle(['r', 2, 3, 5, 5, 9]), [3, 5]);
  });

});

