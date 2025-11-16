type Subscriber = {
  id: number;
  email: string;
  createdAt: string;
};

const store: Subscriber[] = [];

export default {
  getAll(): Subscriber[] {
    // newest first
    return [...store].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  },

  create(email: string): Subscriber | null {
    if (store.some(s => s.email.toLowerCase() === email.toLowerCase())) {
      return null; // duplicate
    }
    const id = store.length ? store[store.length - 1].id + 1 : 1;
    const rec: Subscriber = { id, email, createdAt: new Date().toISOString() };
    store.push(rec);
    return rec;
  }
};
