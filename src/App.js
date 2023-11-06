import { useState } from "react";
import Input from "./component/Input";
import Showuser from "./component/Showuser";

function App() {
  const [addusers, setaddusers] = useState([]);
  function IncUserHandler(user) {
    setaddusers((prev) => {
      return [...prev, user];
    });
  }
  return (
    <>
      <Input onaddUser={IncUserHandler} />
      <Showuser users={addusers} />
    </>
  );
}

export default App;
