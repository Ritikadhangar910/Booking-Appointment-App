import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Input = (props) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [num, setnum] = useState("");
  const summitForm = async (e) => {
    e.preventDefault();
    const obj = { name, email, phonenumber: num };
    let response = await fetch("http://localhost:4000/user/add-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
    response = await response.json();
    props.onaddUser(response.data);
  };

  return (
    <>
      <h2>Booking Appointment App</h2>
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
            <Form.Label>Contact No.</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter number"
              value={num}
              onChange={(e) => {
                setnum(e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
export default Input;
