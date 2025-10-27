import type { NewsletterSubscriber } from "../data/NewsletterSubscriber";
import { newsletterTestData } from "../data/newsletterTestData";

// Shared array to prevent repeating test data
let subscribers: NewsletterSubscriber[] = [...newsletterTestData];

export class NewsletterRepository {
  getAll(): NewsletterSubscriber[] {
    return subscribers;
  }

  add(email: string): NewsletterSubscriber | null {
    // Prevent duplicate emails
    if (subscribers.some(sub => sub.email === email)) return null;

    const newSubscriber: NewsletterSubscriber = {
      id: subscribers.length + 1,
      email
    };
    subscribers.push(newSubscriber);
    return newSubscriber;
  }
}
