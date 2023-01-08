import { ListTransactions } from ".";

type SutTypes = {
  url?: string;
  methodGet?: jest.Mock;
};

const makeSutListTransactions = (params?: SutTypes) => {
  const urlSpy = params?.url || "url_any";
  const methodGetSpy =
    params?.methodGet ||
    jest.fn().mockResolvedValue({
      status: 200,
      data: [
        {
          id: "any_id",
          name: "any_name",
          price: 10,
          type: "any_type",
          category: "any_category",
        },
      ],
    });

  const sut = new ListTransactions(urlSpy, methodGetSpy);

  return {
    sut,
    urlSpy,
    methodGetSpy,
  };
};

describe("ListTransactions", () => {
  it("should call methodGet with correct params", async () => {
    const { sut, urlSpy, methodGetSpy } = makeSutListTransactions();
    await sut.execute();

    expect(methodGetSpy).toHaveBeenCalledWith(urlSpy);
  });

  it("should return a ListTransactionsReturn on success, status 200", async () => {
    const { sut } = makeSutListTransactions();
    const response = await sut.execute();

    expect(response).toEqual({
      status: 200,
      data: [
        {
          id: "any_id",
          name: "any_name",
          price: 10,
          type: "any_type",
          category: "any_category",
        },
      ],
    });
  });

  it("should return status 400 and data with array empty", async () => {
    const { sut, methodGetSpy } = makeSutListTransactions();
    methodGetSpy.mockResolvedValueOnce({
      status: 400,
      data: [],
    });

    const response = await sut.execute();

    expect(response).toEqual({
      status: 400,
      data: [],
    });
  });
});
