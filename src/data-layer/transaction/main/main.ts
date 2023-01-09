import { api } from "../../../service/api";
import { ListTransactions, AddNewTransaction } from "../use-cases";

export type TransactionProps = {
  name: string;
  type: string;
  amount: number;
  category: string;
};

export class MainTransaction {
  url = `${process.env.REACT_APP_API_URL}/transactions`;

  async handleListTransactions() {
    const listTransactions = new ListTransactions(this.url, api.get);

    const response = await listTransactions.execute();
    return response;
  }

  async handleCreateTransaction(data: TransactionProps) {
    const addNewTransaction = new AddNewTransaction(this.url, api.post);

    const response = await addNewTransaction.add(data);

    if (response.status !== 201) {
      throw new Error("Error to create transaction");
    }

    this.handleListTransactions();
  }
}
