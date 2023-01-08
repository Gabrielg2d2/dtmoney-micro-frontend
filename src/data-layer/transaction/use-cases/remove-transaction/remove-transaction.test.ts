import { makeSutDeleteTransaction } from "./makeSut";

describe("RemoveTransaction", () => {
  it("should call methodDeleteTransaction with correct params", async () => {
    const { sut, methodDeleteTransactionSpy, urlSpy, transactionIdSpy } =
      makeSutDeleteTransaction();

    sut.removeTransaction({ url: urlSpy, transactionId: transactionIdSpy });

    expect(methodDeleteTransactionSpy).toHaveBeenCalledWith(
      urlSpy,
      transactionIdSpy
    );
  });

  it("should return promise status 200", async () => {
    const { sut, urlSpy, transactionIdSpy } = makeSutDeleteTransaction();

    const response = await sut.removeTransaction({
      url: urlSpy,
      transactionId: transactionIdSpy,
    });

    expect(response.status).toBe(200);
  });
});
