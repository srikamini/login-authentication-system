import "./../Dashboard.css";

export default function Dashboard({ onLogout }) {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="dashboard">
      <h1>Welcome, {user?.name || "User"} 🎉</h1>
      <p>You are now logged in.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
