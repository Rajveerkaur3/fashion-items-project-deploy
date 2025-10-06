import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Trend Aura</h1>
      <p className="landing-subtitle">Welcome to our fashion website!</p>
      <div className="landing-buttons">
        <Link to="/login" className="landing-link">Login</Link>
        <span> or </span>
        <Link to="/sign-up" className="landing-link">Sign up</Link>
        <span> to get started.</span>
      </div>
    </div>
  );
};

export default LandingPage;
