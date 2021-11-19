import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import {NotificationContainer, NotificationManager} from "react-notifications";

import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import Blog from "./components/Blog";
function App() {

  const showNotif = (type,title,msg) => {
    NotificationManager[type](msg,title);
  };

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
          <Route exact path="/admin/login" element={<Login showNotif={showNotif}></Login>}></Route>
        </Routes>
      </div>
      <NotificationContainer/>
    </Router>
  );
}

export default App;
