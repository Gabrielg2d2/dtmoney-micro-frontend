import { ListTransactions } from "../use-cases/list-transactions";

export class MainTransaction {
  handleListTransactions = async () => {
    const url = "http://localhost:3000/transactions";
    const methodGet = new Promise((resolve, reject) =>
      resolve({ status: 200, data: [] })
    );
    const listTransactions = new ListTransactions(url, methodGet);

    const response = await listTransactions.execute();

    return response;
  };
}
