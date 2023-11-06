import { useEffect, useState } from "react";

const Showuser = (props) => {
  const getusers = props.users;
  const [users, setusers] = useState(getusers);
  const [editusers, seteditUsers] = useState(users);
  async function getAllUsers() {
    let response = await fetch("http://localhost:4000/user/get-users");
    response = await response.json();
    setusers(response.data);
  }
  useEffect(() => {
    getAllUsers();
  }, [getusers, editusers]);
  async function deleteUser(id) {
    try {
      await fetch(`http://localhost:4000/user/delete-user/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "Application/json",
        },
      });

      const getRemaining = users.filter((user) => {
        return user.id !== id;
      });

      seteditUsers(getRemaining);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <h2 className="mt-2">Show users</h2>
      {users.map((user) => (
        <span key={user.id}>
          <p>name: {user.name}</p>
          <p>email: {user.email}</p>
          <p>contact no.: {user.phonenumber}</p>
          <button
            onClick={() => {
              deleteUser(user.id);
            }}
          >
            delete button
          </button>
          <button>Edit button</button>
        </span>
      ))}
    </>
  );
};
export default Showuser;
