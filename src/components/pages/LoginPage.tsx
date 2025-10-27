import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToggle } from "../../hooks/useToggle";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, togglePassword] = useToggle(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/fashion");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        {/* Flex container for one-line layout */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          {/* Email field */}
          <label style={{ flex: 1 }}>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "100%", boxSizing: "border-box" }}
            />
          </label>

          {/* Password field */}
          <label style={{ flex: 1 }}>
            Password:
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: "100%",
                  paddingRight: "35px",
                  boxSizing: "border-box",
                }}
              />
              <span
                onClick={togglePassword}
                style={{
                  position: "absolute",
                  right: "8px",
                  cursor: "pointer",
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </label>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
