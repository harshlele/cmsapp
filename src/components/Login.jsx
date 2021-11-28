import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { auth } from "../utils/service";

function Login(props) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [searchParams] = useSearchParams();
  const nav = useNavigate();

  useEffect(() => {
    let sess = searchParams.get("nosess");
    if (Boolean(sess) == true) {
      props.showNotif("error", "No active session, please login");
      searchParams.delete("nosess");
    }
  }, []);

  const login = async (scope) => {
    if (user == "" || pass == "") {
      props.showNotif("error", "User/password cannot be empty");
      return;
    }
    if (scope == "change_password" && newPass == "") {
      props.showNotif("error", "New password cannot be empty");
      return;
    }

    let reqBody = { user, pass };
    if (scope == "change_password") reqBody["new_pass"] = newPass;

    auth
      .authenticate(scope, reqBody)
      .then((res) => {
        if (res.status == 1) {
          if (scope == "login") nav("/admin", { replace: true });
          if (scope == "change_password") nav("/admin/login");
        } else {
          props.showNotif("error", res.msg);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div
        className={`p-8 login mx-auto w-10/12 md:w-1/3 border-2 border-green-600 rounded-lg ${
          props.passChange ? "h-82" : "h-80"
        }`}
      >
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
          className={`w-11/12 text-lg md:text-xl px-2 py-2 border-2 active:border-green-300 ${
            props.passChange ? "mb-2" : ""
          }`}
          placeholder="Password..."
          id="passwd"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        {props.passChange && (
          <input
            type="password"
            className="w-11/12 text-lg md:text-xl px-2 py-2 border-2 active:border-green-300"
            placeholder="New Password..."
            id="new_passwd"
            value={newPass}
            onChange={(e) => {
              setNewPass(e.target.value);
            }}
          />
        )}
        <button
          className="cms-button"
          onClick={() =>
            login(`${props.passChange ? "change_password" : "login"}`)
          }
        >
          {props.passChange ? "Change Password" : "Login"}
        </button>
        {!props.passChange && (
          <button className="cms-button" onClick={() => login("signup")}>
            Sign Up
          </button>
        )}
      </div>
    </div>
  );
}

export default Login;
