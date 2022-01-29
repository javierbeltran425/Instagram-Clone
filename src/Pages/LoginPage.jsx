import React, { useState } from "react";

/**
 * Components imports
 */
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import "../Css/PasswordDemo.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login(e) {
    e.preventDefault()

    const userData = {
      username: username,
      password: password
    }
    
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <form
        className="md:w-2/3 lg:w-1/3 outline outline-1 outline-gray-400 rounded-md"
        style={{ height: "80%" }}
      >
        <h1 className="text-black text-3xl font-bold text-center m-10">
          Instagram
        </h1>
        <div className="flex flex-col h-1/2 justify-center w-full p-3">
          <div className="card mt-4">
            <span className="p-float-label">
              <InputText
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="username">Username</label>
            </span>
          </div>

          <div className="card w-full mt-4">
            <Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              feedback={false}
              style={{ width: "100%" }}
              toggleMask
            />
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <button className="w-full mx-4 bg-blue-300 rounded-sm text-white font-bold">Log In</button>
        </div>
      </form>
    </div>
  );
}
