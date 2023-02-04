export type TransactionPage = {
  page: number;
  totalCount: number;
  transactions: Transaction[];
};

export type Transaction = {
  Amount: string;
  Company: string;
  Date: string;
  Ledger: string;
};
