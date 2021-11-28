import { useNavigate } from "react-router-dom";
import { auth } from "../utils/service";
import { List, ArrowBarRight } from "react-bootstrap-icons";
import { useState } from "react";
import Sidebar from "./Sidebar";

function AdminDashboard() {
  const nav = useNavigate();
  const [isSidebarShow, setSidebar] = useState(false);

  fetch("/admin/blogs", {
    credentials: "include",
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify({}),
  })
    .then((response) => {
      if (!response.ok && response.status == 401) {
        nav("/admin/login?nosess=true");
      } else return response;
    })
    .then((r) => r.json())
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });

  const logout = () => {
    auth
      .logout()
      .then((res) => {
        if (res.status != 1) console.log(res);
        nav("/admin/login");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="w-full h-full flex justify-center">
      <div className="nav w-full h-full">
        <div className="navbar w-full h-12 bg-green-700 flex justify-left border-2 border-green-800">
          {document.body.clientWidth < 768 && (
            <button
              className="text-white text-4xl m-2"
              onClick={() => {
                setSidebar(!isSidebarShow);
              }}
            >
              <List></List>
            </button>
          )}

          <input
            type="text"
            className="p-2 bg-transparent my-2 text-white md:mx-auto"
            placeholder="Search..."
            id="search"
          />

          <button
            className="text-white text-4xl m-2 md:mx-2 ml-auto"
            onClick={logout}
          >
            <ArrowBarRight />
          </button>
        </div>
        <div className={`sidebar ${isSidebarShow ? "" : "hide"}`}>
          <Sidebar></Sidebar>
        </div>
        <div className="nav-content">{document.body.clientWidth}</div>
      </div>
    </div>
  );
}

export default AdminDashboard;
