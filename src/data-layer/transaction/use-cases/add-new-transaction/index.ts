import {
  AddNewTransactionParams,
  IAddNewTransaction,
} from "../../../../domain/transaction/use-cases/add-new-transaction";
import { AddNewTransactionReturn } from "../../../../domain/transaction/use-cases/add-new-transaction/model";

type MethodPost = (
  url: string,
  body: AddNewTransactionParams
) => Promise<AddNewTransactionReturn>;

export class AddNewTransaction implements IAddNewTransaction {
  constructor(
    private readonly url: string,
    private readonly methodPost: MethodPost
  ) {}

  async add(data: AddNewTransactionParams) {
    const response = await this.methodPost(this.url, data);

    return response;
  }
}
