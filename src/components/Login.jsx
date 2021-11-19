import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const baseUrl = `http://127.0.0.1:3000`;
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const nav = useNavigate();

  const login = async (scope) => {
    if (user == "" || pass == "") {
      console.log("user/pass empty");
      return;
    }

    let reqBody = { user, pass, scope };

    fetch(`${baseUrl}/auth`, {
      credentials: "include",
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify(reqBody),
    })
      .then((r) => r.json())
      .then((res) => {
        if (res.status == 1 && scope == "login") {
          nav("/admin");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="p-8 login mx-auto w-10/12 md:w-1/3 h-80 border-2 border-green-600 rounded-lg">
        <div className="text-2xl md:text-5xl mb-8">Admin Console</div>
        <input
          type="email"
          className="w-11/12 text-lg md:text-xl px-2 py-2 border-2 active:border-green-300 my-2"
          placeholder="Username..."
          id="user"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <input
          type="password"
          className="w-11/12 text-lg md:text-xl px-2 py-2 border-2 active:border-green-300"
          placeholder="Password..."
          id="passwd"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <button className="cms-button" onClick={() => login("login")}>
          Login
        </button>
        <button className="cms-button" onClick={() => login("signup")}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;
