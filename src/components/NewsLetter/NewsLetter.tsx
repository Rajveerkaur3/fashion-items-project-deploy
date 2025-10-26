import { useState, useEffect } from "react";
import "./Newsletter.css";
import { NewsletterRepository } from "../../repositories/NewsletterRepository";
import type { NewsletterSubscriber } from "../../data/NewsletterSubscriber";

const Newsletter: React.FC = () => {
  const newsletterRepo = new NewsletterRepository();
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Load initial test data
  useEffect(() => {
    setSubscribers(newsletterRepo.getAll());
  }, []);

  const handleSubscribe = () => {
    if (!email.trim()) {
      setMessage("⚠️ Please enter a valid email!");
      return;
    }

    const newSub = newsletterRepo.add(email);
    if (!newSub) {
      setMessage("⚠️ You are already subscribed!");
      return;
    }

    setSubscribers([...subscribers, newSub]);
    setMessage(`🎉 Thanks, ${email}! You’re subscribed.`);
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
