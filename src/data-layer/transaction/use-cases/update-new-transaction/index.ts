import {
  IUpdateNewTransaction,
  UpdateNewTransactionParams,
} from "../../../../domain/transaction/use-cases/update-new-transaction";
import { UpdateNewTransactionResult } from "../../../../domain/transaction/use-cases/update-new-transaction/model";

type MethodPutParams = {
  url: string;
  body: UpdateNewTransactionParams;
};

type MethodPut = (
  params: MethodPutParams
) => Promise<UpdateNewTransactionResult>;

export class UpdateNewTransactions implements IUpdateNewTransaction {
  constructor(
    private readonly url: string,
    private readonly methodPut: MethodPut
  ) {}

  async put(data: UpdateNewTransactionParams) {
    const response = await this.methodPut({
      url: this.url,
      body: data,
    });

    return response;
  }
}
