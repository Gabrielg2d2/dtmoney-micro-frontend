import { MainTransaction } from "./main";
import { data_transactions_mock } from "../../../mock/transactions";

describe("Transaction", () => {
  it("should spy on the handleListTransactions function, and inject the mock", async () => {
    const mainTransaction = new MainTransaction();
    const apiGetSpy = jest.spyOn(mainTransaction, "handleListTransactions");

    apiGetSpy.mockResolvedValueOnce({
      status: 200,
      data: data_transactions_mock,
    });

    const response = await mainTransaction.handleListTransactions();

    expect(response).toEqual({
      status: 200,
      data: [
        {
          id: "any_id",
          name: "any_name",
          price: 10,
          type: "withdraw",
          category: "any_category",
        },
        {
          id: "any_id2",
          name: "any_name2",
          price: 200,
          type: "deposit",
          category: "any_category2",
        },
      ],
    });
  });

  it("should call the function only once", async () => {
    const mainTransaction = new MainTransaction();
    const apiGetSpy = jest.spyOn(mainTransaction, "handleListTransactions");

    apiGetSpy.mockResolvedValueOnce({
      status: 200,
      data: data_transactions_mock,
    });

    await mainTransaction.handleListTransactions();

    expect(apiGetSpy).toHaveBeenCalledTimes(1);
  });
});
