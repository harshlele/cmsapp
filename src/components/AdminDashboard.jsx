import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const nav = useNavigate();

  fetch(`http://127.0.0.1:3000/admin/blogs`, {
    credentials: "include",
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify({}),
  })
    .then((response) => {
      if (!response.ok && response.status == 401) {
        nav("/admin/login");
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
    const reqBody = { scope: "logout" };
    fetch("http://127.0.0.1:3000/auth", {
      credentials: "include",
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(reqBody),
    })
    .then((r) => r.json())
    .then((res) => {
      nav("/admin/login");
    })
    .catch((e) => {
      console.log(e);
    });
  };

  return (
    <div className="w-100 h-100 flex justify-center">
      <button className="cms-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default AdminDashboard;
