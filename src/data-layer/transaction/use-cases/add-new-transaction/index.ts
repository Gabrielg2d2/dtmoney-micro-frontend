import {
  AddNewTransactionParams,
  IAddNewTransaction,
} from "../../../../domain/transaction/use-cases/add-new-transaction";
import { AddNewTransactionResult } from "../../../../domain/transaction/use-cases/add-new-transaction/model";

type MethodPostParams = {
  url: string;
  body: AddNewTransactionParams;
};

type MethodPost = (
  params: MethodPostParams
) => Promise<AddNewTransactionResult>;

export class AddNewTransaction implements IAddNewTransaction {
  constructor(
    private readonly url: string,
    private readonly methodPost: MethodPost
  ) {}

  async add(data: AddNewTransactionParams): Promise<AddNewTransactionResult> {
    const response = await this.methodPost({
      url: this.url,
      body: data,
    });

    return response;
  }
}
