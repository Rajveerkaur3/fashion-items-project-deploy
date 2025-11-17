// src/hooks/useNewsletter.ts
import { useState, useEffect } from "react";
import { NewsletterService } from "../services/NewsletterService";
import type { NewsletterSubscriber } from "../data/NewsletterSubscriber";

export function useNewsletter() {
  const service = new NewsletterService();
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      setMessage("");
      try {
        const data = await service.getAllSubscribers();
        if (mounted) setSubscribers(data);
      } catch (err: any) {
        console.error("Failed to load subscribers:", err);
        if (mounted) setMessage("⚠️ Unable to load subscribers.");
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const subscribe = async (email: string) => {
    setMessage("");
    if (!email.trim()) {
      setMessage("⚠️ Please enter a valid email!");
      return null;
    }

    setLoading(true);
    try {
      const newSub = await service.addSubscriber(email);
      if (!newSub) {
        setMessage("⚠️ You are already subscribed!");
        return null;
      }
      // prepend so newest appears first
      setSubscribers(prev => [newSub, ...prev]);
      setMessage(`🎉 Thanks, ${email}! You’re subscribed.`);
      return newSub;
    } catch (err: any) {
      console.error("Subscribe error:", err);
      setMessage(err?.message ?? "⚠️ Subscription failed.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { subscribers, message, subscribe, loading };
}
