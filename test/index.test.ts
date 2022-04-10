import { describe, it, expect } from "vitest";

import getValueByKey from "../src";

describe("getValueByKey", () => {
  it("is a function", () => {
    expect(typeof getValueByKey).toBe("function");
  });

  it("gets a value at top level", () => {
    const expected = 4;
    const actual = getValueByKey({ num: 4 }, "num");

    expect(actual).toEqual(expected);
  });

  it("gets a value in a nested level", () => {
    const expected = 4;
    const actual = getValueByKey({ nested: { num: 4 } }, "nested.num");

    expect(actual).toEqual(expected);
  });

  it("return null if path doesn't exist", () => {
    const expected = null;
    const actual = getValueByKey({ num: 4 }, "nested.num");

    expect(actual).toEqual(expected);
  });
});
