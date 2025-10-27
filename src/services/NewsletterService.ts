import { NewsletterRepository } from "../repositories/NewsletterRepository";
import type { NewsletterSubscriber } from "../data/NewsletterSubscriber";

//NewsletterService provides higher-level methods for managing subscribers.

//Acts as a bridge between repository and UI layer (component/hook).
 
export class NewsletterService {
  private repo = new NewsletterRepository();

  getAllSubscribers(): NewsletterSubscriber[] {
    return this.repo.getAll();
  }

  addSubscriber(email: string): NewsletterSubscriber | null {
    return this.repo.add(email);
  }
}
