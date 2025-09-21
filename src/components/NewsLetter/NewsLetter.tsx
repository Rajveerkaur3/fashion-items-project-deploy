import { useState } from "react";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubmitted(true);
      setEmail("");
      alert("Thank you! You will receive new sale updates.");
    } else {
      alert("Please enter your email!");
    }
  };

  return (
    <div className="newsletter">
      <h3>Subscribe for New Sale Updates!</h3>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSubscribe}>Subscribe</button>
      {submitted && <p>Thanks for subscribing! 🎉</p>}
    </div>
  );
};

export default Newsletter;
