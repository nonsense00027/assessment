import "./App.css";
import Landing from "./pages/Landing";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Services from "./pages/Landing/Services";
import Contact from "./pages/Landing/Contact";
import Login from "./pages/Authentication/Login";
import { useAuthContext } from "./contexts/AuthContext";
import Dashboard from "./pages/admin/Dashboard";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Application from "./pages/Application";
import Technology from "./pages/Technology";

function App() {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div className="App">
      {!user ? (
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/application" element={<Application />} />
            <Route path="/tech" element={<Technology />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
