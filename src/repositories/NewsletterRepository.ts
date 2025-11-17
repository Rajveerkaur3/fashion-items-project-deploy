// src/repositories/NewsletterRepository.ts
import type { NewsletterSubscriber } from "../data/NewsletterSubscriber";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export class NewsletterRepository {
  private base = `${BASE_URL}/newsletter`;

  async getAll(): Promise<NewsletterSubscriber[]> {
    const res = await fetch(this.base, { method: "GET", headers: { Accept: "application/json" } });
    if (!res.ok) {
      throw new Error(`Failed to fetch subscribers (${res.status})`);
    }
    return res.json();
  }

  async add(email: string): Promise<NewsletterSubscriber | null> {
    const res = await fetch(this.base, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (res.status === 409) {
      // duplicate
      return null;
    }

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Failed to add subscriber (${res.status}) ${text}`);
    }

    return res.json();
  }
}
