import React from "react";

const AddUser = () => {
  const handdleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };

    // send data to the server
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("User added successfully");
        event.target.reset();
      });
  };
  return (
    <div>
      <h1>Please Add user</h1>
      <form onSubmit={handdleAddUser}>
        <input type="text" name="name" placeholder="Name" required />
        <br />
        <input type="email" name="email" placeholder="Email" required />
        <br />
        <input type="submit" value="Add a User" />
      </form>
    </div>
  );
};

export default AddUser;
