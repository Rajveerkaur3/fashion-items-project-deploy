import { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (email.trim()) {
      setMessage(`🎉 Thanks, ${email}! You’re subscribed for updates.`);
      setEmail("");
    } else {
      setMessage("⚠️ Please enter a valid email address!");
    }
  };

  return (
    <div className="newsletter">
      <h3>Stay Updated on New Sales!</h3>
      <p className="newsletter-subtext">
        Subscribe to get the latest deals straight to your inbox.
      </p>

      <div className="newsletter-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="newsletter-input"
        />
        <button onClick={handleSubscribe} className="newsletter-btn">
          Subscribe
        </button>
      </div>

      {message && <p className="newsletter-msg">{message}</p>}
    </div>
  );
};

export default Newsletter;
