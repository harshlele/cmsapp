import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import Blog from "./components/Blog";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Blog></Blog>}></Route>
          <Route
            exact
            path="/admin"
            element={<AdminDashboard></AdminDashboard>}
          ></Route>
          <Route exact path="/admin/login" element={<Login></Login>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
