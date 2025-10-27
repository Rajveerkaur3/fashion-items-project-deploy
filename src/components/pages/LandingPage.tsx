import { Link } from "react-router-dom";
import { useInteractions } from "../../hooks/useInteractions";
import "./LandingPage.css";

const LandingPage = () => {
  const { totalInteractions, addInteraction } = useInteractions();

  const handleClick = (action: string) => {
    addInteraction();
    console.log(action);
  };

  return (
    <div className="landing-container">
      <h1 className="landing-title">Trend Aura</h1>
      <p className="landing-subtitle">Welcome to our fashion website!</p>
      <div className="landing-buttons">
        <Link 
          to="/login" 
          className="landing-link" 
          onClick={() => handleClick("Login Clicked")}
        >
          Login
        </Link>
        <span> or </span>
        <Link 
          to="/sign-up" 
          className="landing-link" 
          onClick={() => handleClick("Sign Up Clicked")}
        >
          Sign up
        </Link>
        <span> to get started.</span>
      </div>
      <p>Total interactions: {totalInteractions}</p>
    </div>
  );
};

export default LandingPage;
