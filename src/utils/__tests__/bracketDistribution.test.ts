import { sortPlayerPositioning } from "../bracketDistribution";

describe("sortPlayerPositioning", () => {
  it("returns a sorted array", () => {
    const result = sortPlayerPositioning(8); // replace with the desired length
    expect(result).toEqual([1, 8, 4, 5, 2, 7, 3, 6]);
  });

  it("handles edge case with length 1", () => {
    const result = sortPlayerPositioning(1);
    expect(result).toEqual([1, 0]);
  });
});
