import {
  IListTransactions,
  ListTransactionsReturn,
} from "../../../../domain/transaction/use-cases/list-transactions";

type MethodGetTransactions = (url: string) => Promise<ListTransactionsReturn>;

export class ListTransactions implements IListTransactions {
  constructor(
    private readonly url: string,
    private readonly methodGet: MethodGetTransactions
  ) {}

  async execute() {
    const response = await this.methodGet(this.url);

    return response;
  }
}
