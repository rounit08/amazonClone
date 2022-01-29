import "./App.css";
import Headerhome from "./Headerhome";
import Headercheckout from "./Headercheckout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login.js";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<Headercheckout />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Headerhome />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
