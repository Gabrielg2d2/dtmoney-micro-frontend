export type DataTransactionProps = {
  id: string;
  name: string;
  price: number;
  type: string;
  category: string;
};

export type ListTransactionsReturn = {
  status: number;
  data: DataTransactionProps[];
};

export interface IListTransactions {
  execute: () => Promise<ListTransactionsReturn>;
}
