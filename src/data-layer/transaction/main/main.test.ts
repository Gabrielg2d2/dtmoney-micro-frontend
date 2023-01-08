import { MainTransaction } from "./main";

describe("Transaction", () => {
  it("should be able to create a transaction", () => {
    const mainTransaction = new MainTransaction();

    expect(mainTransaction).toBeDefined();
  });

  it("should be able to list transactions", async () => {
    const mainTransaction = new MainTransaction();
    const response = await mainTransaction.handleListTransactions();

    expect(response.data).toEqual([
      {
        id: "any_id",
        name: "any_name",
        price: 10,
        type: "any_type",
        category: "any_category",
      },
    ]);
  });
});
