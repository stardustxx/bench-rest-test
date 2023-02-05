import { render, screen } from "@testing-library/react";
import {
  TransactionTableHead,
  TransactionTableHeadProps,
} from "../TransactionTableHead";

describe("TransactionTableHead", () => {
  const setup = ({ total }: TransactionTableHeadProps) =>
    render(<TransactionTableHead total={total} />);

  it("should render", () => {
    setup({ total: 100 });

    screen.getByRole("columnheader", {
      name: /date/i,
    });
    screen.getByRole("columnheader", {
      name: /company/i,
    });
    screen.getByRole("columnheader", {
      name: /account/i,
    });
    screen.getByRole("columnheader", {
      name: /100/,
    });
  });
});
