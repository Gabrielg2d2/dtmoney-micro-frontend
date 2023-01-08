import {
  IRemoveTransaction,
  RemoveTransactionParams,
} from "../../../../domain/transaction/use-cases/remove-transaction";
import { RemoveTransactionResult } from "../../../../domain/transaction/use-cases/remove-transaction/model";

type MethodDeleteTransaction = (
  url: string,
  transactionId: string
) => Promise<RemoveTransactionResult>;

export class RemoveTransaction implements IRemoveTransaction {
  constructor(
    private readonly methodDeleteTransaction: MethodDeleteTransaction
  ) {}

  async removeTransaction({ url, transactionId }: RemoveTransactionParams) {
    const response = await this.methodDeleteTransaction(url, transactionId);
    return response;
  }
}
