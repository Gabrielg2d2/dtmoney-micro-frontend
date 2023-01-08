import { makeSutAddNewTransaction } from "./makeSut";

describe("AddNewTransaction", () => {
  it("should call methodPost with correct values", async () => {
    const { sut, urlSpy, methodPostSpy, dataSpy } = makeSutAddNewTransaction();

    await sut.add(dataSpy);

    expect(methodPostSpy).toHaveBeenCalledWith({
      url: urlSpy,
      body: dataSpy,
    });
  });

  it("should return promise status 200", async () => {
    const { sut, dataSpy } = makeSutAddNewTransaction();

    const response = await sut.add(dataSpy);

    expect(response.status).toBe(200);
  });
});
