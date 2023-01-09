import { AddNewTransactionReturn } from "./model";

export type AddNewTransactionParams = {
  name: string;
  amount: number;
  type: string;
  category: string;
};

export interface IAddNewTransaction {
  add: (data: AddNewTransactionParams) => Promise<AddNewTransactionReturn>;
}
