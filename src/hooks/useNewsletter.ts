import { useState, useEffect } from "react";
import { NewsletterService } from "../services/NewsletterService";
import type { NewsletterSubscriber } from "../data/NewsletterSubscriber";

 //Custom hook to manage newsletter subscribers.
 //Encapsulates state and calls NewsletterService internally.

export function useNewsletter() {
  const service = new NewsletterService();
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [message, setMessage] = useState("");

  // Load initial subscribers from service
  useEffect(() => {
    setSubscribers(service.getAllSubscribers());
  }, []);

  // Add a new subscriber
  const subscribe = (email: string) => {
    if (!email.trim()) {
      setMessage("⚠️ Please enter a valid email!");
      return;
    }

    const newSub = service.addSubscriber(email);
    if (!newSub) {
      setMessage("⚠️ You are already subscribed!");
      return;
    }

    setSubscribers([...subscribers, newSub]);
    setMessage(`🎉 Thanks, ${email}! You’re subscribed.`);
  };

  return { subscribers, message, subscribe };
}
