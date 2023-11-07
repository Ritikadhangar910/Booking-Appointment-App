import { useEffect, useState } from "react";
const Showexpense = (props) => {
  const expenses = props.expense;
  const [allexpenses, setAllexpenses] = useState(expenses);
  const [copyexpense, setCopyexpenses] = useState([]);
  async function getallExpenses() {
    let request = await fetch("http://localhost:4000/expense/get-expenses");
    request = await request.json();
    setAllexpenses(request.data);
  }
  useEffect(() => {
    getallExpenses();
  }, [expenses, copyexpense]);

  async function deleteExpense(id) {
    await fetch(`http://localhost:4000/expense/delete-expense/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
      },
    });
    const Restexpenses = allexpenses.filter((expense) => {
      return expense.id !== id;
    });
    setCopyexpenses(Restexpenses);
  }

  return (
    <>
      <h2>Show all expenses</h2>
      {allexpenses.map((expense) => (
        <div key={expense.id}>
          <p>name: {expense.name}</p>
          <p>expense: {expense.expense}</p>
          <button onClick={() => props.dataOnFields(expense)}>On Edit </button>
          <button
            onClick={() => {
              deleteExpense(expense.id);
            }}
          >
            delete btn
          </button>
        </div>
      ))}
    </>
  );
};
export default Showexpense;
