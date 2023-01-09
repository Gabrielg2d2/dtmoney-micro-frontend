import { api } from "../../../service/api";
import { ListTransactions } from "../use-cases";

export class MainTransaction {
  handleListTransactions = async () => {
    const url = `http://localhost:3333/transactions`;
    // const url = `${process.env.REACT_APP_API_URL}/transactions`;

    const listTransactions = new ListTransactions(url, api.get);

    const response = await listTransactions.execute();

    return response;
  };
}
