// src/services/NewsletterService.ts
import { NewsletterRepository } from "../repositories/NewsletterRepository";
import type { NewsletterSubscriber } from "../data/NewsletterSubscriber";

export class NewsletterService {
  private repo = new NewsletterRepository();

  async getAllSubscribers(): Promise<NewsletterSubscriber[]> {
    return this.repo.getAll();
  }

  async addSubscriber(email: string): Promise<NewsletterSubscriber | null> {
    return this.repo.add(email);
  }
}
