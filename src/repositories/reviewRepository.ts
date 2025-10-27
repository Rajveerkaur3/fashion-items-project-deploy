

export type Review = {
  id: number;
  text: string;
};

let reviews: Review[] = [
  { id: 1, text: "Love the service!" },
  { id: 2, text: "Fast delivery and friendly staff." },
  { id: 3, text: "Great experience overall." },
  { id: 4, text: "Very clean and quick." },
  { id: 5, text: "Customer support was excellent." },
  { id: 6, text: "The product quality is good." },
  { id: 7, text: "Will definitely recommend!" },
  { id: 8, text: "Satisfied with the service." },
  { id: 9, text: "Nice and easy process." },
  { id: 10, text: "Could be a bit faster next time." },
];


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
