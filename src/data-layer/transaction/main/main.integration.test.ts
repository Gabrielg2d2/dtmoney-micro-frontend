import { MainTransaction } from "./main";
import { data_transactions_mock } from "../../../mock/transactions";

describe("Transaction - List", () => {
  it("should spy on the handleListTransactions function, and inject the mock", async () => {
    const mainTransaction = new MainTransaction();
    const mainSpy = jest.spyOn(mainTransaction, "handleListTransactions");

    mainSpy.mockResolvedValueOnce({
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
          amount: 10,
          type: "withdraw",
          category: "any_category",
        },
        {
          id: "any_id2",
          name: "any_name2",
          amount: 200,
          type: "deposit",
          category: "any_category2",
        },
      ],
    });
  });

  it("should call the function only once", async () => {
    const mainTransaction = new MainTransaction();
    const mainSpy = jest.spyOn(mainTransaction, "handleListTransactions");

    mainSpy.mockResolvedValueOnce({
      status: 200,
      data: data_transactions_mock,
    });

    await mainTransaction.handleListTransactions();

    expect(mainSpy).toHaveBeenCalledTimes(1);
    expect(mainTransaction.handleListTransactions).toHaveBeenCalledTimes(1);
  });
});

describe("Transaction - Create", () => {
  it("should add a new transaction", () => {
    const mainTransaction = new MainTransaction();
    const mainSpy = jest.spyOn(mainTransaction, "handleCreateTransaction");

    mainTransaction.handleCreateTransaction(data_transactions_mock[0]);

    expect(mainSpy).toHaveBeenCalledTimes(1);
    expect(mainTransaction.handleCreateTransaction).toHaveBeenCalledTimes(1);

    expect(mainSpy).toHaveBeenCalledWith({
      id: "any_id",
      name: "any_name",
      amount: 10,
      type: "withdraw",
      category: "any_category",
    });
  });

  it("should error with status different 201", async () => {
    const mainTransaction = new MainTransaction();
    const mainSpy = jest.spyOn(mainTransaction, "handleCreateTransaction");

    const response = await mainTransaction.handleCreateTransaction(
      data_transactions_mock[0]
    );

    expect(mainSpy).toHaveBeenCalledTimes(1);
    expect(mainTransaction.handleCreateTransaction).toHaveBeenCalledTimes(1);

    expect(response.status).toEqual(400);
  });

  it("should call the method 'handleListTransactions' after adding a new transaction", async () => {
    const mainTransaction = new MainTransaction();
    const mainSpy = jest.spyOn(mainTransaction, "handleCreateTransaction");

    mainSpy.mockResolvedValueOnce({
      status: 201,
      data: data_transactions_mock,
    });

    const response = await mainTransaction.handleCreateTransaction(
      data_transactions_mock[0]
    );

    expect(response.data[0]).toEqual({
      id: "any_id",
      name: "any_name",
      amount: 10,
      type: "withdraw",
      category: "any_category",
    });

    expect(response.status).toEqual(201);
  });
});
