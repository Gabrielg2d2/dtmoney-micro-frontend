import { RemoveTransactionResult } from "./model";

export type RemoveTransactionParams = {
  url: string;
  transactionId: string;
};

export interface IRemoveTransaction {
  removeTransaction: ({
    url,
    transactionId,
  }: RemoveTransactionParams) => Promise<RemoveTransactionResult>;
}
