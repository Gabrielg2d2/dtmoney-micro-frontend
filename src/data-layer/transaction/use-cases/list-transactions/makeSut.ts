import { ListTransactions } from ".";

type SutTypes = {
  url?: string;
  methodGet?: jest.Mock;
};

export const makeSutListTransactions = (params?: SutTypes) => {
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
