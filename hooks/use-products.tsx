import { deleteProduct } from "@/lib/api";
import { fetcher } from "@/lib/utils";
import { Product } from "@prisma/client";
import useSWR, { useSWRConfig } from "swr";

export function useProducts() {
  const { data, isLoading, error, mutate } = useSWR(
    "/api/products",
    fetcher,
    {}
  );

  return {
    products: data as Product[],
    isLoading,
    error,
    mutate,
  };
}
