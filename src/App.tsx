import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  const items = [
    {
      key: "1",
      description: "description",
      amount: 12,
      category: "category 1",
    },
    {
      key: "2",
      description: "description",
      amount: 12,
      category: "category 2",
    },
    {
      key: "3",
      description: "description",
      amount: 12,
      category: "category 3",
    },
    {
      key: "4",
      description: "description",
      amount: 12,
      category: "category 4",
    },
    {
      key: "5",
      description: "description",
      amount: 12,
      category: "category 5",
    },
    {
      key: "6",
      description: "description",
      amount: 12,
      category: "category 1",
    },
    {
      key: "7",
      description: "description",
      amount: 12,
      category: "category 2",
    },
    {
      key: "8",
      description: "description",
      amount: 12,
      category: "category 3",
    },
    {
      key: "9",
      description: "description",
      amount: 12,
      category: "category 4",
    },
    {
      key: "10",
      description: "description",
      amount: 12,
      category: "category 5",
    },
  ];

  const [expenseList, setExpenseList] = useState(items);

  const [category, setCategory] = useState("");

  const onDelete = (key: string) => {
    setExpenseList(expenseList.filter((expense) => expense.key != key));
  };

  const onSelect = (category: string) => {
    setCategory(category);
  };

  const visibleExpense =
    category === ""
      ? expenseList
      : expenseList.filter((expense) => expense.category === category);

  const categories = [
    ...new Set(expenseList.map((expense) => expense.category)),
  ];

  const addExpense = (data: {
    key: string;
    description: string;
    amount: number;
    category: string;
  }) => {
    setExpenseList([...expenseList, data]);
  };

  return (
    <>
      <ExpenseForm categories={categories} addExpense={addExpense} />
      <hr />
      <ExpenseFilter onSelect={onSelect} categories={categories} />
      <hr />
      <ExpenseList expenseList={visibleExpense} onDelete={onDelete} />
    </>
  );
}

export default App;
