// src/repository/reviewRepository.ts

export type Review = {
  id: number;
  text: string;
};

// simple test data
let reviews: Review[] = [
  { id: 1, text: "Love the service!" },
  { id: 2, text: "Fast delivery and friendly staff." },
  { id: 3, text: "Great experience overall." },
];

// this acts like our “data layer”
export const reviewRepository = {
  getAll: () => Promise.resolve(reviews),

  add: (text: string) => {
    const newReview = { id: Date.now(), text };
    reviews.unshift(newReview);
    return Promise.resolve(newReview);
  },

  remove: (id: number) => {
    reviews = reviews.filter((r) => r.id !== id);
    return Promise.resolve(true);
  },
};
