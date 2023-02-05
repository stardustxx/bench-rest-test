import { render, screen } from "@testing-library/react";
import { useTransactions } from "hooks";
import { TransactionTable } from "../TransactionTable";

jest.mock("hooks", () => ({
  useTransactions: jest.fn(),
}));

describe("TransactionTable", () => {
  const setup = () => render(<TransactionTable />);

  beforeAll(() => {
    jest.clearAllMocks();
  });

  it("should render", () => {
    useTransactions.mockImplementation(() => ({
      data: {
        pages: [
          {
            page: 1,
            totalCount: 2,
            transactions: [
              {
                Amount: "10",
                Company: "Test 1",
                Date: "2023-01-01",
                Ledger: "AAA",
              },
            ],
          },
        ],
        pageParams: [],
      },
      error: undefined,
      isSuccess: true,
      fetchNextPage: jest.fn(),
      hasNextPage: false,
      isFetchingNextPage: false,
    }));

    setup();

    screen.getByRole("cell", { name: "$10.00" });
    screen.getByRole("cell", { name: "Test 1" });
    screen.getByRole("cell", { name: "2023-01-01" });
    screen.getByRole("cell", { name: "AAA" });
  });

  it("should render error message", () => {
    useTransactions.mockImplementation(() => ({
      data: {
        pages: [],
        pageParams: [],
      },
      error: new Error("error"),
      isSuccess: true,
      fetchNextPage: jest.fn(),
      hasNextPage: false,
      isFetchingNextPage: false,
    }));

    setup();

    screen.getByText("Something is wrong with the query");
  });
});
