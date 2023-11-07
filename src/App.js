import { useState } from "react";
import Expenseinp from "./component/Expenseinp";
import Showexpense from "./component/Showexpense";

function App() {
  const [expense, setexpense] = useState([]);
  const [valedit, setvalEdit] = useState(null);
  function addExpenseHandler(val) {
    setexpense((prev) => {
      return [...prev, val];
    });
  }
  function dataOnFields(val) {
    setvalEdit(val);
  }
  return (
    <>
      <Expenseinp onAddexpense={addExpenseHandler} valedit={valedit} />
      <Showexpense expense={expense} dataOnFields={dataOnFields} />
    </>
  );
}

export default App;
