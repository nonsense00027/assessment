import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuthContext();

  return (
    <div className="w-screen bg-white mx-auto h-20 flex items-center justify-center fixed top-0 left-0 z-50">
      <div className="max-w-screen-lg flex-1 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_cte6e3oj.json"
            background="transparent"
            speed="1"
            style={{ width: 100, height: 100 }}
            loop
            autoplay
          ></lottie-player>
          <div>
            <h1 className="font-primary font-bold text-xl">LOVE</h1>
            <p className="text-xs">Licensing Of Vehicle for Everyone</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <h4 className="navbar" onClick={() => navigate("/")}>
            Home
          </h4>
          <h4 className="navbar" onClick={() => navigate("/services")}>
            Services
          </h4>
          <h4 className="navbar" onClick={() => navigate("/contact")}>
            Contact
          </h4>
          <h4 className="navbar" onClick={() => navigate("/tech")}>
            Technology
          </h4>
          <button
            className="bg-primary px-4 py-2 text-white rounded-sm"
            onClick={() => navigate("/application")}
          >
            Get License
          </button>
          {user ? (
            <button
              className="bg-white px-4 py-2 rounded-sm border"
              onClick={() => {
                logout();
                navigate("/");
                window.location.reload();
              }}
            >
              Signout
            </button>
          ) : (
            <button
              className="bg-white px-4 py-2 rounded-sm border"
              onClick={() => navigate("/login")}
            >
              Signin Admin
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
