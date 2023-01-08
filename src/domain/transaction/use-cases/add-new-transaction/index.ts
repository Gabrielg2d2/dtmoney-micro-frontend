import { AddNewTransactionResult } from "./model";

export type AddNewTransactionParams = {
  name: string;
  price: number;
  type: "deposit" | "withdraw";
  category: string;
};

export interface IAddNewTransaction {
  add: (data: AddNewTransactionParams) => Promise<AddNewTransactionResult>;
}
