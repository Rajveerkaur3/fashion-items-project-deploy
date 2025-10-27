export class AppService {
  // Landing page interactions
  static addLandingInteraction(prev: string[], interaction: string): string[] {
    return [...prev, interaction];
  }

  // Add customer review (text only)
  static addReview(prevReviews: string[], text: string): string[] {
    return [...prevReviews, text];
  }

  // Global interaction counter
  private static totalInteractions = 0;
  private static subscribers: ((count: number) => void)[] = [];

  static incrementInteractions() {
    this.totalInteractions++;
    this.subscribers.forEach(cb => cb(this.totalInteractions));
  }

  static subscribeInteractions(cb: (count: number) => void) {
    this.subscribers.push(cb);
    cb(this.totalInteractions);
  }

  static getTotalInteractions() {
    return this.totalInteractions;
  }
}
