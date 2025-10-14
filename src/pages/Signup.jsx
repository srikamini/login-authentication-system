import { useState } from "react";
import "./../Auth.css";

export default function Signup({ onLogin, onSwitch }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert(`Signup successful!\nName: ${name}`);
    onLogin();
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <span onClick={onSwitch}>Login</span>
      </p>
    </div>
  );
}
