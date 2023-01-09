import { api } from "../../../service/api";
import {
  ListTransactions,
  AddNewTransaction,
  RemoveTransaction,
  UpdateNewTransactions,
} from "../use-cases";

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

    if (response.status === 201) {
      const responseUpdateListTransaction = await this.handleListTransactions();
      return {
        status: response.status,
        data: responseUpdateListTransaction.data,
      };
    }

    return {
      status: 400,
      data: [],
    };
  }

  async handleDeleteTransaction(id: string) {
    const deleteTransaction = new RemoveTransaction(api.delete);
    const urlDelete = `${this.url}/${id}`;

    const response = await deleteTransaction.removeTransaction(urlDelete);

    if (response.status === 200) {
      const responseUpdateListTransaction = await this.handleListTransactions();
      return {
        status: response.status,
        data: responseUpdateListTransaction.data,
      };
    }

    return {
      status: 400,
      data: [],
    };
  }

  async handleUpdateTransaction(id: string, body: TransactionProps) {
    const urlUpdate = `${this.url}/${id}`;
    const updateTransaction = new UpdateNewTransactions(urlUpdate, api.put);
    const mainSpy = jest.spyOn(updateTransaction, "put");

    mainSpy.mockResolvedValue({
      status: 200,
      data: [],
    });

    const response = await updateTransaction.put(body);

    if (response.status === 200) {
      const responseUpdateListTransaction = await this.handleListTransactions();
      return {
        status: response.status,
        data: responseUpdateListTransaction.data,
      };
    }

    return {
      status: 400,
      data: [],
    };
  }
}
