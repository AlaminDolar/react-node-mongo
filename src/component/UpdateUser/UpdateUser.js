import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    const ulr = `http://localhost:5000/user/${id}`;
    fetch(ulr)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  const handdleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const UpdateUser = { name, email };

    // Update data to the server
    const ulr = `http://localhost:5000/user/${id}`;
    fetch(ulr, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("User Update successfully");
        event.target.reset();
      });
  };
  return (
    <div>
      <h1>Updatting Id :{user?.name}</h1>
      <form onSubmit={handdleAddUser}>
        <input type="text" name="name" placeholder="Name" required />
        <br />
        <input type="email" name="email" placeholder="Email" required />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateUser;
