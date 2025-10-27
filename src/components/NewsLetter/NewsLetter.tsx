import { useState } from "react";
import "./Newsletter.css";
import { useToggle } from "../../hooks/useToggle";
import { useNewsletter } from "../../hooks/useNewsletter";

interface NewsletterProps {
  totalComments: number;
  setTotalComments: React.Dispatch<React.SetStateAction<number>>;
}

const Newsletter: React.FC<NewsletterProps> = ({ totalComments, setTotalComments }) => {
  const [email, setEmail] = useState("");
  const [localMessage, setLocalMessage] = useState("");
  const [isOpen, toggleIsOpen] = useToggle(false);
  const { subscribers, message, subscribe } = useNewsletter();

  const handleSubscribe = () => {
    if (email.trim()) {
      subscribe(email);
      setEmail("");
      setTotalComments(totalComments + 1);
      setLocalMessage("");
    } else {
      setLocalMessage("⚠️ Please enter a valid email address!");
    }
  };

  return (
    <div className="newsletter">
      {!isOpen && (
        <button onClick={toggleIsOpen} className="newsletter-toggle-btn">
          Stay Updated on New Sales!
        </button>
      )}

      {isOpen && (
        <div className="newsletter-form-wrapper">
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

          {(message || localMessage) && (
            <p className="newsletter-msg">{message || localMessage}</p>
          )}

          <p>Total subscribers: {subscribers.length}</p>
          <p>Comments tracked: {totalComments}</p>

          <button onClick={toggleIsOpen} className="newsletter-close-btn">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
