import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { usePlayerStatsFilter } from "../hooks/usePlayerStatsFilter";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const { setData } = usePlayerStatsFilter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(username, password);
    setData();
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        name="username"
        autoComplete="false"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        name="password"
        autoComplete="false"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={isLoading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
