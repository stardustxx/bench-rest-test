import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";
import { TransactionPage } from "types";

const SIZE = 10;

export const useTransactions = (
  options?: UseInfiniteQueryOptions<TransactionPage>
) => {
  const {
    data,
    error,
    isSuccess,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<TransactionPage>({
    queryFn: async ({ pageParam = 1 }) => {
      const response = await fetch(
        `https://resttest.bench.co/transactions/${pageParam}.json`
      );
      if (!response.ok) {
        throw new Error("something is wrong");
      }

      return response.json();
    },
    queryKey: ["transactions"],
    getNextPageParam: (lastPage) => {
      const { totalCount, page } = lastPage;
      if (totalCount > page * SIZE) {
        return page + 1;
      }

      return undefined;
    },
    ...options,
  });

  return {
    data,
    error,
    isSuccess,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
