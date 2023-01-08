import { makeSutUpdateNewTransactions } from "./makesut";

describe("UpdateNewTransaction", () => {
  it("should call method put with params corrects", async () => {
    const { sut, urlSpy, methodPutSpy, dataSpy } =
      makeSutUpdateNewTransactions();

    await sut.put(dataSpy);

    expect(methodPutSpy).toHaveBeenCalledWith({
      url: urlSpy,
      body: dataSpy,
    });
  });

  it("should return status corrects", async () => {
    const { sut, dataSpy } = makeSutUpdateNewTransactions();

    const response = await sut.put(dataSpy);

    expect(response.status).toBe(200);
  });

  it("should return status 400", async () => {
    const { sut, dataSpy } = makeSutUpdateNewTransactions({
      methodPutSpy: jest.fn().mockResolvedValue({
        status: 400,
      }),
    });

    const response = await sut.put(dataSpy);

    expect(response.status).toBe(400);
  });
});
