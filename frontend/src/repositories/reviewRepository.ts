export type Review = {
  id: number;
  text: string;
};

const API_URL = "http://localhost:4000/api/reviews";

export const reviewRepository = {
  async getAll() {
    const response = await fetch(API_URL);
    return response.json();
  },

  async add(text: string) {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    return response.json();
  },

  
  async remove(id: number) {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
  },
};
