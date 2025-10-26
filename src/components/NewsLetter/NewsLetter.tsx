import { useState } from "react";
import "./Newsletter.css";
import { useNewsletter } from "../../hooks/useNewsletter";

//Newsletter component displays subscription form.
//Uses the custom hook `useNewsletter` for managing subscribers.

const Newsletter: React.FC = () => {
  const { subscribers, message, subscribe } = useNewsletter();
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    subscribe(email);
    setEmail("");
  };

  return (
    <div className="newsletter">
      <h3>Stay Updated on New Sales!</h3>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={handleSubscribe}>Subscribe</button>

      {message && <p>{message}</p>}
      <p>Total subscribers: {subscribers.length}</p>
    </div>
  );
};

export default Newsletter;
