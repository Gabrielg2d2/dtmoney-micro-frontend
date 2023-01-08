import { AddNewTransaction } from ".";

describe("AddNewTransaction", () => {
  const url = "http://localhost:3000/transactions";
  const methodPost = jest.fn();
  const addNewTransaction = new AddNewTransaction(url, methodPost);
});
