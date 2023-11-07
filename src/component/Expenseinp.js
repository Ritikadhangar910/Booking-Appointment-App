import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Expenseinp = (props) => {
  const editVal = props.valedit;
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [expen, setexpen] = useState("");
  async function summitForm(e) {
    const obj = { name, email, expen };
    e.preventDefault();
    let response = await fetch("http://localhost:4000/expense/create", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(obj),
    });
    response = await response.json();
    props.onAddexpense(response.data);
  }

  useEffect(() => {
    if (editVal !== null) {
      setname(editVal.name);
      setemail(editVal.email);
      setexpen(editVal.expense);
    }
  }, [editVal]);

  async function EditHandler() {
    const obj = { name, email, expense: expen };
    const id = editVal.id;
    let response = await fetch(
      `http://localhost:4000/expense/edit-expense/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );
    response = await response.json();
    console.log(response);
  }

  return (
    <>
      <h2>Expense App</h2>
      <div style={{ width: "300px", marginTop: "10px" }}>
        <Form onSubmit={summitForm}>
          <Form.Group className="mb-3" controlId="formBasicname">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNum">
            <Form.Label>Your Expense</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter expense"
              value={expen}
              onChange={(e) => {
                setexpen(e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="m-2">
            Submit
          </Button>
          <Button
            variant="primary"
            type="button"
            className="m-2"
            onClick={EditHandler}
          >
            Edit btn
          </Button>
        </Form>
      </div>
    </>
  );
};
export default Expenseinp;
