import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useInteractions } from "../../hooks/useInteractions";
import { useState } from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const { totalInteractions, addInteraction } = useInteractions();
  const { isLoaded } = useUser();
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = (action: string) => {
    addInteraction();
    console.log(action);
  };

  const handleNotificationsClick = () => {
    console.log("Notifications button clicked!");
    
    if (!isLoaded) {
      console.log("Clerk still loading...");
      return;
    }

    setShowMessage(true);
    
    setTimeout(() => {
      setShowMessage(false);
    }, 4000);
  };

  return (
    <div className="landing-container">
      <h1 className="landing-title">Trend Aura</h1>
      <p className="landing-subtitle">Welcome to our fashion website!</p>
      
      {/* Message that appears when button is clicked */}
      {showMessage && (
        <div className="login-message">
          ⚠️ Please login first to check notifications!
        </div>
      )}
      
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
      <p style={{ marginTop: "20px" }}>Total interactions: {totalInteractions}</p>

      {/* Notifications button at bottom-right - using CSS class */}
      <button 
        onClick={handleNotificationsClick}
        className="notifications-button"
      >
        🔔 Notifications
      </button>
    </div>
  );
};

export default LandingPage;