import { ListTransactionsReturn } from "../../../domain/transaction/use-cases/list-transactions/model";
import { ListTransactions } from "../use-cases/list-transactions";

export class MainTransaction {
  handleListTransactions = async () => {
    const url = `${process.env.REACT_APP_API_URL}/transactions`;

    const fetchGet = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const methodGet = await fetchGet.json();

    const listTransactions = new ListTransactions(url, methodGet);

    const response = await listTransactions.execute();

    return response;
  };
}
