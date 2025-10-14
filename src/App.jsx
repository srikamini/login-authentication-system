import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="app-container">
      {!isLoggedIn ? (
        isSignup ? (
          <Signup onLogin={() => setIsLoggedIn(true)} onSwitch={() => setIsSignup(false)} />
        ) : (
          <Login onLogin={() => setIsLoggedIn(true)} onSwitch={() => setIsSignup(true)} />
        )
      ) : (
        <Dashboard onLogout={() => setIsLoggedIn(false)} />
      )}
    </div>
  );
}

export default App;
