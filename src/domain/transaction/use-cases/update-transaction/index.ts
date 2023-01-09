import { UpdateNewTransactionResult } from "./model";

export type UpdateNewTransactionParams = {
  name: string;
  amount: number;
  type: string;
  category: string;
};

export interface IUpdateNewTransaction {
  put: (
    data: UpdateNewTransactionParams
  ) => Promise<UpdateNewTransactionResult>;
}
