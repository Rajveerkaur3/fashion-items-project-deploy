import { useState } from "react";
import { useToggle } from "../../hooks/useToggle";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { SignInButton } from "@clerk/clerk-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, togglePassword] = useToggle(false);

  return (
    <div className="login-container">
      <h2>Login</h2>

      <form className="login-form">
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

      </form>
      <SignInButton mode="modal" forceRedirectUrl="/fashion">
        <button type="button">Login</button>
      </SignInButton>
    </div>
  );
};

export default LoginPage;
