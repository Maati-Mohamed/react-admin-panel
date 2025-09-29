import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import Users from "./pages/users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users />} />
        <Route path="/*" element={<h1>404</h1>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
