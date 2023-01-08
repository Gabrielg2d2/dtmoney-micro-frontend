import { AddNewTransactionResult } from "./model";

export type AddNewTransactionParams = {
  name: string;
  price: number;
  type: string;
  category: string;
};

export interface IAddNewTransaction {
  add: (data: AddNewTransactionParams) => Promise<AddNewTransactionResult>;
}
