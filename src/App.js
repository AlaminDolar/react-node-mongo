import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import AddUser from "./component/AddUser/AddUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/add/user" element={<AddUser></AddUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
