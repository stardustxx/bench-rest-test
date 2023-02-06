import { formatDate } from "../formatDate";

describe("formatDate", () => {
  it("should format the date given a string", () => {
    expect(formatDate("2023-01-01")).toBe("Jan 1st, 2023");
  });

  it("should format the date given a date object", () => {
    expect(formatDate(new Date("2023-01-01"))).toBe("Jan 1st, 2023");
  });

  it("should return error if it cannot format", () => {
    expect(formatDate("this is not a date object")).toBe("Something is wrong");
  });
});
