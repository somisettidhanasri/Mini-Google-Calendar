import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

export default function App({ user }) {
  const [page, setPage] = useState("login");

  // NOT LOGGED IN
  if (!user) {
    return page === "login"
      ? <Login setPage={setPage} />
      : <Register setPage={setPage} />;
  }

  // LOGGED IN
  return <Dashboard user={user} />;
}
