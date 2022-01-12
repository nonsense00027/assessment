import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { login, user } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password)
      .then(() => console.log("login success"))
      .catch((error) => alert(error.message));
  };
  return (
    <div className="flex w-screen h-screen">
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold mb-10">Welcome Admin! 👋</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              name="email"
              required
              className="border rounded-sm px-2 py-1 w-80"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              required
              className="border rounded-sm px-2 py-1 w-80"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-80 py-1 bg-secondary text-white mt-4"
          >
            Login
          </button>
        </form>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center bg-secondary">
        <lottie-player
          src="https://assets5.lottiefiles.com/packages/lf20_cte6e3oj.json"
          background="transparent"
          speed="1"
          style={{ width: 300, height: 300 }}
          loop
          autoplay
        ></lottie-player>
        <h1 className="text-6xl font-bold text-primary">LOVE</h1>
        <h4 className="opacity-80 text-white text-lg font-semibold">
          Licensing Of Vehicle for Everyone
        </h4>
      </div>
    </div>
  );
}

export default Login;
