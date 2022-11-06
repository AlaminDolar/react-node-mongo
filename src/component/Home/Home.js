import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDelete = (id) => {
    const proceeed = window.confirm("Sure to Delete");
    if (proceeed) {
      const url = `http://localhost:5000/user/${id}`;
      fetch(url, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaiing = users.filter((user) => user._id !== id);
            setUsers(remaiing);
          }
        });
    }
  };
  return (
    <div>
      <h1>Total Available user: {users.length}</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name}:: {user.email}
            <Link to={`/update/${user._id}`}>
              <button>Update</button>
            </Link>
            <button onClick={() => handleDelete(user._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
